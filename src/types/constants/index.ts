import { MENU_ITEM_VARIANT } from "@/constants/filter";
import { ReactNode } from "react";

export interface IMenuDynamicDropdown {
  variant: `${MENU_ITEM_VARIANT}`;
  id: string | number;
  label?: string;
  className?: string;
  icon?: ReactNode;
  option?: Record<string, unknown>;
  radioOptions?: Record<string, unknown>[];
}
export interface ISortConfig {
  triggerName: string;
  contents: IMenuDynamicDropdown[];
}
