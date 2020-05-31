import { story } from "../../utils";
import TableBasic from "./TableBasic.story.vue";
import TablePagination from "./TablePagination.story.vue";
import TableDense from "./TableDense.story.vue";
import TableSorting from "./TableSorting.story.vue";

export default {
  title: "Table"
};

export const tableBasic = story(TableBasic);
export const tableDense = story(TableDense);
export const tableSorting = story(TableSorting);
export const tablePagination = story(TablePagination);
