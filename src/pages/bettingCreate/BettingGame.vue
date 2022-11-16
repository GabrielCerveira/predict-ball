<template>
  <div class="bg-dark text-white">
    <span class="text-h4 text-center">COPA DO MUNDO</span>
    <q-separator size="2px" />
    <div v-for="match in tableMatch" :key="match.title">
      <span>{{ match.title }}</span>
      <div class="q-pa-md">
        <PB-card-table :tableMatch="match" />
      </div>
    </div>
  </div>
</template>

<script>
import PBCardTable from "src/components/generic/PBCardTable.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "BettingGame",
  components: { PBCardTable },
  setup() {
    const tableMatch = [
      {
        title: "grupo A",
        rodadas: [
          {
            matches: [
              {
                homeTeam: "Suiça",
                homeTeamInitials: "che",
                awayTeam: "camarões",
                awayTeamInitials: "cmr",
                status: 1,
                dateTime: "24/11/2022",
                stadium: "AL JANOUB",
              },
              {
                homeTeam: "brasil",
                homeTeamInitials: "bra",
                awayTeam: "servia",
                awayTeamInitials: "srb",
                status: 1,
                dateTime: "24/11/2022",
                stadium: "lusail",
              },
            ],
          },
          {
            matches: [
              {
                homeTeam: "camarões",
                homeTeamInitials: "cmr",
                awayTeam: "servia",
                awayTeamInitials: "srb",
                status: 1,
                dateTime: "28/11/2022",
                stadium: "AL JANOUB",
              },
              {
                homeTeam: "brasil",
                homeTeamInitials: "bra",
                awayTeam: "suiça",
                awayTeamInitials: "che",
                status: 1,
                dateTime: "28/11/2022",
                stadium: "stadium 974",
              },
            ],
          },
          {
            matches: [
              {
                homeTeam: "camarões",
                homeTeamInitials: "cmr",
                awayTeam: "brasil",
                awayTeamInitials: "bra",
                status: 1,
                dateTime: "02/12/2022",
                stadium: "lusail",
              },
              {
                homeTeam: "servia",
                homeTeamInitials: "srb",
                awayTeam: "suiça",
                awayTeamInitials: "che",
                status: 1,
                dateTime: "02/12/2022",
                stadium: "stadium 974",
              },
            ],
          },
        ],
      },
    ];
    console.log(tableMatch);
    return {
      tableMatch,
    };
  },
});
</script>

<style></style>
