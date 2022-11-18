<template>
  <q-table
    dark
    :rows="dataTable"
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
  computed: {
    dataTable: function () {
      const seed = this.seed;
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

      seed.forEach((seed, index) => {
        seed.index = index + 1;
      });
      return seed;
    },
    sizeTable: function () {
      return this.seed.length >= 24 ? 24 : this.seed.length;
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
        field: (seed) => seed.team,
      },
      { name: "Pontos", label: "P", field: "points", sortOrder: "da" },
      { name: "Jogos", label: "J", field: "games" },
      { name: "Vitórias", label: "V", field: "wins" },
      { name: "Empates", label: "E", field: "draw" },
      { name: "Derrotas", label: "D", field: "defeats" },
      { name: "Gols marcados", label: "GP", field: "goalsScored" },
      { name: "Gols sofridos", label: "GC", field: "goalsConceded" },
      { name: "Saldo", label: "S", field: "balance" },
    ];

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
      columns,
    };
  },
});
</script>

<style></style>
