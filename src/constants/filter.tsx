import { ISortConfig } from "@/types/constants";
import { ArrowUpAZ, ArrowUpZA, ChartSpline, Clock, Star } from "lucide-react";
export enum MENU_ITEM_VARIANT {
  RADIO = "RADIO",
  CHECKBOX = "CHECKBOX",
  SEPARATOR = "SEPARATOR",
  ITEM = "ITEM",
  LABEL = "LABEL",
}

export enum SortOptions {
  DIFFICULTY_INCREASE = "DIFFICULTY_INCREASE",
  DIFFICULTY_DECREASE = "DIFFICULTY_DECREASE",
  DATE_INCREASE = "DATE_INCREASE",
  DATE_DECREASE = "DATE_DECREASE",
  NAME_INCREASE = "NAME_INCREASE",
  NAME_DECREASE = "NAME_DECREASE",
}
export const sortConfig = (
  value: string,
  onValueChange: Function
): ISortConfig => {
  return {
    triggerName: "Sort By",
    contents: [
      {
        variant: MENU_ITEM_VARIANT.LABEL,
        id: 0,
        label: "Sort By",
        className: "text-xs text-secondaryText",
      },
      { variant: MENU_ITEM_VARIANT.SEPARATOR, id: 1 },
      {
        id: 2,
        variant: MENU_ITEM_VARIANT.RADIO,
        option: {
          value,
          onValueChange,
        },
        radioOptions: [
          {
            value: SortOptions.DIFFICULTY_INCREASE,
            label: "By Difficulty ↑",
            icon: <ChartSpline size={16} />,
          },
          {
            value: SortOptions.DIFFICULTY_DECREASE,
            label: "By Difficulty ↓",
            icon: <ChartSpline size={16} />,
          },
          {
            value: SortOptions.DATE_INCREASE,
            label: "By Date ↑",
            icon: <Clock size={16} />,
          },
          {
            value: SortOptions.DATE_DECREASE,
            label: "By Date ↓",
            icon: <Clock size={16} />,
          },
          {
            value: SortOptions.NAME_INCREASE,
            label: "By Name (A-Z)",
          },
          {
            value: SortOptions.NAME_DECREASE,
            label: "By Name (Z-A)",
          },
        ],
      },
    ],
  };
};
export const FilterConfig = (
  value: Record<string, boolean>,
  onValueChange: Function
): ISortConfig => {
  return {
    triggerName: "Filter",
    contents: [
      {
        variant: MENU_ITEM_VARIANT.LABEL,
        id: 0,
        label: "Filter By",
        className: "text-xs text-secondaryText",
      },
      { variant: MENU_ITEM_VARIANT.SEPARATOR, id: 1 },
      {
        id: 2,
        variant: MENU_ITEM_VARIANT.CHECKBOX,
        option: {
          value,
          onValueChange,
        },

        label: "Favorite",
        icon: <Star size={16} />,
      },
      {
        variant: MENU_ITEM_VARIANT.LABEL,
        id: 3,
        label: "Difficulty",
        className: "text-xs text-secondaryText",
      },
      {
        id: 4,
        variant: MENU_ITEM_VARIANT.CHECKBOX,
        option: {
          value,
          onValueChange,
        },

        label: "Easy",
      },
      {
        id: 4,
        variant: MENU_ITEM_VARIANT.CHECKBOX,
        option: {
          value,
          onValueChange,
        },

        label: "Medium",
      },
      {
        id: 4,
        variant: MENU_ITEM_VARIANT.CHECKBOX,
        option: {
          value,
          onValueChange,
        },

        label: "Difficult",
      },
    ],
  };
};
