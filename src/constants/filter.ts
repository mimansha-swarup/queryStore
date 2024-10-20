export enum MENU_ITEM_VARIANT {
  RADIO = "RADIO",
  CHECKBOX = "CHECKBOX",
}
export const FILTERS = {
  sortBy: [
    {
      id: "difficult_up",
      variant: MENU_ITEM_VARIANT.RADIO,
      label: "By Difficulty ↑",
      icon: null,
    },
    {
      id: "difficult_down",
      variant: MENU_ITEM_VARIANT.RADIO,
      label: "By Difficulty ↓",
      icon: null,
    },
    {
      id: "date_up",
      variant: MENU_ITEM_VARIANT.RADIO,
      label: "By Date ↑",
      icon: null,
    },
    {
      id: "date_down",
      variant: MENU_ITEM_VARIANT.RADIO,
      label: "By Date ↓",
      icon: null,
    },
    {
      id: "name_up",
      variant: MENU_ITEM_VARIANT.RADIO,
      label: "By Name (A-Z)",
      icon: null,
    },
    {
      id: "Name_down",
      variant: MENU_ITEM_VARIANT.RADIO,
      label: "By Name (Z-A)",
      icon: null,
    },
  ],
};
