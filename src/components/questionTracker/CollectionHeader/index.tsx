"use client";
import React, { useState } from "react";
import { FilterConfig, sortConfig, SortOptions } from "@/constants/filter";
import { ButtonWithDropdown } from "@/components/shared/ButtonWithDropdown";

const CollectionHeader = ({ children }: { children: any }) => {
  const [sortOptions, setSortOptions] = useState(SortOptions.DATE_INCREASE);
  return (
    <div className="mt-5 px-4 border-b border-shadow flex items-center justify-between">
      <h2 className="scroll-m-20  pb-2 text-lg font-semibold text-white tracking-tight first:mt-0 ">
        {children}
      </h2>
      <div className="px-4">
        <ButtonWithDropdown config={sortConfig(sortOptions, setSortOptions)} />
        <ButtonWithDropdown config={FilterConfig({}, () => null)} />
      </div>
    </div>
  );
};

export default CollectionHeader;
