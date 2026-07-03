"use client";

import { Download, Eye, MoreHorizontal, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownTrigger,
} from "@/components/ui/Dropdown";
import type { IGeneratedReport } from "@/types/report";

interface IReportActionsMenuProps {
  report: IGeneratedReport;
  onView: (report: IGeneratedReport) => void;
}

export function ReportActionsMenu({ report, onView }: IReportActionsMenuProps) {
  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label={`Open actions for ${report.name}`}
        >
          <MoreHorizontal className="h-4 w-4" aria-hidden="true" />
        </Button>
      </DropdownTrigger>
      <DropdownContent align="end" className="w-40">
        <DropdownItem onClick={() => onView(report)}>
          <Eye className="h-4 w-4" aria-hidden="true" />
          View
        </DropdownItem>
        <DropdownItem>
          <Download className="h-4 w-4" aria-hidden="true" />
          Download
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem destructive>
          <Trash2 className="h-4 w-4" aria-hidden="true" />
          Delete
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}
