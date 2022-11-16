<template>
  <q-table
    dark
    :rows="rows"
    :columns="columns"
    row-key="name"
    hide-bottom
    :rows-per-page-options="[sizeTable]"
  />
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "PBClassification",
  props: {
    seed: {
      type: String,
    },
  },
  setup() {
    const columns = [
      {
        name: "index",
        label: "#",
        field: "index",
      },
      {
        name: "name",
        required: true,
        label: "Classificação",
        align: "left",
        field: (row) => row.name,
      },
      { name: "Pontos", label: "P", field: "points", sortOrder: "da" },
      { name: "Jogos", label: "J", field: "games" },
      { name: "Vitórias", label: "V", field: "wins" },
      { name: "Empates", label: "E", field: "draws" },
      { name: "Derrotas", label: "D", field: "defeats" },
      { name: "Gols marcados", label: "GP", field: "goalsScored" },
      { name: "Gols sofridos", label: "GC", field: "goalsConceded" },
      { name: "Saldo", label: "S", field: "balance" },
    ];

    const seed = [
      {
        name: "Brasil",
        points: 9,
        games: 3,
        wins: 3,
        draws: 0,
        defeats: 0,
        goalsScored: 15,
        goalsConceded: 3,
        balance: 12,
      },
      {
        name: "Suiça",
        points: 3,
        games: 3,
        wins: 1,
        draws: 0,
        defeats: 2,
        goalsScored: 3,
        goalsConceded: 5,
        balance: -2,
      },
      {
        name: "Servia",
        points: 0,
        games: 3,
        wins: 0,
        draws: 0,
        defeats: 3,
        goalsScored: 4,
        goalsConceded: 5,
        balance: -1,
      },
      {
        name: "Camarões",
        points: 6,
        games: 3,
        wins: 2,
        draws: 0,
        defeats: 1,
        goalsScored: 8,
        goalsConceded: 4,
        balance: 4,
      },
    ];

    let sizeTable = seed.length >= 24 ? 24 : seed.length;
    let rows = [];

    seed.sort(function (a, b) {
      if (a.points > b.points) {
        return -1;
      } else {
        if (a.points === b.points) {
          if (a.balance > b.balance) {
            return -1;
          } else {
            if (a.balance === b.balance) {
              if (a.goalsScored > b.goalsScored) {
                return -1;
              } else {
                return true;
              }
            }
            return true;
          }
        }
        return true;
      }
    });

    for (let i = 0; i < 24; i++) {
      rows = rows.concat(seed.slice(0).map((r) => ({ ...r })));
    }
    rows.forEach((row, index) => {
      row.index = index + 1;
    });
    /* Quick sort
    function quickSort(array) {
      if (array.length === 0) return [];
      if (array.length === 1) return array;

      var pivot = array[0];

      var head = array.filter((n) => n < pivot);
      var equal = array.filter((n) => n === pivot);
      var tail = array.filter((n) => n > pivot);

      return quickSort(head).concat(equal).concat(quickSort(tail));
    }
  */
    return {
      rows,
      columns,
      sizeTable,
    };
  },
});
</script>

<style></style>
