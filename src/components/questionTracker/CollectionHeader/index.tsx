import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { DropdownMenuCheckboxes } from "./filterButton";

const CollectionHeader = ({ children }: { children: any }) => {
  return (
    <div className="mt-5 px-4 border-b border-shadow flex items-center justify-between">
      <h2 className="scroll-m-20  pb-2 text-lg font-semibold text-white tracking-tight first:mt-0 ">
        {children}
      </h2>
      <div className="px-4">
        <DropdownMenuCheckboxes />
        <DropdownMenuCheckboxes />
        <DropdownMenuCheckboxes />
      </div>
    </div>
  );
};

export default CollectionHeader;
