"use client";

import {
  CreditCard,
  FileText,
  LayoutDashboard,
  Search,
  UserRound,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/Modal";
import { SearchEmptyState } from "@/components/ui/EmptyStates";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { useToast } from "@/components/ui/Toast";
import { cn } from "@/lib/cn";
import { getGlobalSearchResults } from "@/services/searchService";
import type { ISearchResult, TSearchResultType } from "@/types/search";

interface ICommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const resultIconMap = {
  customer: UserRound,
  report: FileText,
  subscription: CreditCard,
  page: LayoutDashboard,
};

function getResultLabel(type: TSearchResultType): string {
  return type.charAt(0).toUpperCase() + type.slice(1);
}

export function CommandPalette({ open, onOpenChange }: ICommandPaletteProps) {
  const router = useRouter();
  const { showToast } = useToast();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const results = useMemo(() => getGlobalSearchResults(query), [query]);

  function selectResult(result: ISearchResult) {
    onOpenChange(false);
    setQuery("");
    setSelectedIndex(0);
    router.push(result.href);
    showToast(`Opened ${result.title}.`, "info");
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!results.length) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedIndex((index) => (index + 1) % results.length);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedIndex((index) => (index === 0 ? results.length - 1 : index - 1));
    }

    if (event.key === "Enter") {
      event.preventDefault();
      selectResult(results[selectedIndex] ?? results[0]);
    }
  }

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent className="top-24 max-w-2xl translate-y-0 p-0" showClose={false}>
        <ModalHeader className="border-b border-border p-4 text-left">
          <ModalTitle>Search RevenueIQ</ModalTitle>
          <ModalDescription>
            Jump to customers, reports, subscriptions, or pages.
          </ModalDescription>
        </ModalHeader>
        <div className="relative border-b border-border">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            autoFocus
            name="command-search"
            placeholder="Search customers, reports, subscriptions, pages..."
            aria-label="Search RevenueIQ"
            className="h-12 rounded-none border-0 pl-11 shadow-none focus-visible:ring-0"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {results.length ? (
            <ul className="space-y-1">
              {results.map((result, index) => {
                const Icon = resultIconMap[result.type];
                const selected = index === selectedIndex;
                return (
                  <li key={result.id}>
                    <button
                      type="button"
                      className={cn(
                        "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left",
                        "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        selected ? "bg-accent" : "hover:bg-accent",
                      )}
                      onMouseEnter={() => setSelectedIndex(index)}
                      onClick={() => selectResult(result)}
                    >
                      <span className="rounded-lg bg-muted p-2 text-muted-foreground">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium text-foreground">
                          {result.title}
                        </span>
                        <span className="block truncate text-xs text-muted-foreground">
                          {result.description}
                        </span>
                      </span>
                      <Badge>{getResultLabel(result.type)}</Badge>
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <SearchEmptyState className="border-0 shadow-none" />
          )}
        </div>
      </ModalContent>
    </Modal>
  );
}
