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
import type { ICustomer } from "@/types/customer";

interface ICustomerActionsMenuProps {
  customer: ICustomer;
  onViewDetails: (customer: ICustomer) => void;
}

export function CustomerActionsMenu({
  customer,
  onViewDetails,
}: ICustomerActionsMenuProps) {
  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label={`Open actions for ${customer.fullName}`}
        >
          <MoreHorizontal className="h-4 w-4" aria-hidden="true" />
        </Button>
      </DropdownTrigger>
      <DropdownContent align="end" className="w-44">
        <DropdownItem onClick={() => onViewDetails(customer)}>
          <Eye className="h-4 w-4" aria-hidden="true" />
          View Details
        </DropdownItem>
        <DropdownItem>
          <Edit className="h-4 w-4" aria-hidden="true" />
          Edit
        </DropdownItem>
        <DropdownItem>
          <PauseCircle className="h-4 w-4" aria-hidden="true" />
          Suspend
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
