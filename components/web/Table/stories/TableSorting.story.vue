<template>
  <ThemeProvider :theme="theme">
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              v-for="(column, index) in columns"
              :key="column.value"
              :align="index === 0 ? 'left' : 'right'"
            >
              <TableSortLabel
                :active="sortBy === column.value"
                :direction="sortBy === column.value ? sortDirection : 'asc'"
                @onClick="onSortClick(column.value)"
                >{{ column.name }}</TableSortLabel
              >
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow v-for="d of dataSorted" :key="d._id">
            <TableCell>
              {{ d.name }}
            </TableCell>
            <TableCell align="right">
              {{ d.calories }}
            </TableCell>
            <TableCell align="right">
              {{ d.fat }}
            </TableCell>
            <TableCell align="right">
              {{ d.carbs }}
            </TableCell>
            <TableCell align="right">
              {{ d.protein }}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </ThemeProvider>
</template>

<script>
import ThemeProvider from "../../ThemeProvider.vue";
import theme from "../../baseTheme.ts";
import Table from "../Table.vue";
import TableHead from "../TableHead.vue";
import TableRow from "../TableRow.vue";
import TableCell from "../TableCell.vue";
import TableBody from "../TableBody.vue";
import TableContainer from "../TableContainer.vue";
import TableSortLabel from "../TableSortLabel.vue";

export default {
  name: "TableSorting",
  components: {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    ThemeProvider,
    TableContainer,
    TableSortLabel
  },
  data() {
    return {
      theme,
      sortBy: "",
      sortDirection: "asc",
      columns: [
        { name: "Dessert(100g serving)", value: "name" },
        { name: "Calories", value: "calories" },
        { name: "Fat(g)", value: "fat" },
        { name: "Carbs(g)", value: "carbs" },
        { name: "Protein(g)", value: "protein" }
      ],
      data: [
        {
          _id: "5ed287539eaab8c913d9a09d",
          name: "Frozen yoghurt",
          calories: 159,
          fat: 6,
          carbs: 24,
          protein: 3.1
        },
        {
          _id: "5ed2875eff47eee0312c946b",
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9,
          carbs: 37,
          protein: 4.2
        },
        {
          _id: "5ed2876229ab8fd380895063",
          name: "Eclair",
          calories: 322,
          fat: 7,
          carbs: 37,
          protein: 2.2
        },
        {
          _id: "5ed2877ab356450630afb955",
          name: "Cupcake",
          calories: 302,
          fat: 10,
          carbs: 24,
          protein: 1.5
        },
        {
          _id: "5ed39c4623773c4af18cfc0d",
          name: "Gingerbread",
          calories: 356,
          fat: 16,
          carbs: 49,
          protein: 3.9
        }
      ]
    };
  },
  computed: {
    dataSorted() {
      if (!this.sortBy) return this.data;
      return this.data.sort((a, b) => {
        if (a[this.sortBy] > b[this.sortBy]) {
          return this.sortDirection === "asc" ? 1 : -1;
        } else {
          return this.sortDirection === "asc" ? -1 : 1;
        }
      });
    }
  },
  methods: {
    onSortClick(column) {
      console.log("onSortClick", column);

      if (column !== this.sortBy) {
        this.sortBy = column;
        this.sortDirection = "asc";
      } else {
        this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
      }
    }
  }
};
</script>

<style scoped></style>

<include-source />
