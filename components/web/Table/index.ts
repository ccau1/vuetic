export { default } from "./Table.vue";

export interface ThemeTable {
  table: {
    borderColor: string;
    borderRadius: string | number;
  };
  tableRow: {};
  tableCell: {
    borderHorizontalColor: string;
    paddingHorizontal: string | number;
    paddingVertical: string | number;
  };
}
