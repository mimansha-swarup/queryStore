"use client";

import * as React from "react";

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MENU_ITEM_VARIANT } from "@/constants/filter";
import { Button } from "@/components/ui/button";
import { IMenuDynamicDropdown, ISortConfig } from "@/types/constants";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function DropdownMenuCheckboxes({ config }: { config: ISortConfig }) {
  const renderMenuItem = (content: IMenuDynamicDropdown) => {
    switch (content.variant) {
      case MENU_ITEM_VARIANT.SEPARATOR:
        return <DropdownMenuSeparator key={content.id} />;

      case MENU_ITEM_VARIANT.RADIO:
        console.log(content?.option);
        return (
          <DropdownMenuRadioGroup key={content.id} {...content?.option}>
            {content?.radioOptions?.map((radioOption) => (
              <DropdownMenuRadioItem
                value={radioOption.value as string}
                className="flex gap-2"
              >
                <>
                  {" "}
                  {radioOption.icon} {radioOption.label}{" "}
                </>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        );
      case MENU_ITEM_VARIANT.LABEL:
        return (
          <DropdownMenuLabel
            key={content.id}
            className={`flex gap-2 ${content.className}`}
            {...content?.option}
          >
            <>
              {content?.icon}
              {content?.label}
            </>
          </DropdownMenuLabel>
        );

      default:
        return null;
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"link"}> {config?.triggerName}</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="">
        <DropdownMenuLabel className="text-xs text-secondaryText">
          Sort By
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          className=""
          // checked={showStatusBar}
          // onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          // checked={showActivityBar}
          // onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          // checked={showPanel}
          // onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
