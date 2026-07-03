"use client";

import { Edit, Eye, MoreHorizontal, PauseCircle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownTrigger,
} from "@/components/ui/Dropdown";
import type { ISubscription } from "@/types/subscription";

interface ISubscriptionActionsMenuProps {
  subscription: ISubscription;
  onViewDetails: (subscription: ISubscription) => void;
}

export function SubscriptionActionsMenu({
  subscription,
  onViewDetails,
}: ISubscriptionActionsMenuProps) {
  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label={`Open actions for ${subscription.customerName}`}
        >
          <MoreHorizontal className="h-4 w-4" aria-hidden="true" />
        </Button>
      </DropdownTrigger>
      <DropdownContent align="end" className="w-44">
        <DropdownItem onClick={() => onViewDetails(subscription)}>
          <Eye className="h-4 w-4" aria-hidden="true" />
          View Details
        </DropdownItem>
        <DropdownItem>
          <Edit className="h-4 w-4" aria-hidden="true" />
          Edit
        </DropdownItem>
        <DropdownItem>
          <PauseCircle className="h-4 w-4" aria-hidden="true" />
          Pause Billing
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem destructive>
          <Trash2 className="h-4 w-4" aria-hidden="true" />
          Cancel
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}
