<template>
  <div class="bg-dark text-white">
    <span class="text-h4 text-primary">COPA DO MUNDO</span>
    <q-separator size="2px" color="primary" />
    <div v-for="match in tableMatch" :key="match.title" class="q-pa-md">
      <span class="text-uppercase">{{ match.title }}</span>
      <PB-card-table :tableMatch="match" />
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
                status: 2,
                dateTime: "24/11/2022",
                stadium: "AL JANOUB",
                winner: "camarões",
                homeTeamResult: {
                  team: "suiça",
                  goals: 2,
                },
                awayTeamResult: {
                  team: "camarões",
                  goals: 3,
                },
              },
              {
                homeTeam: "brasil",
                homeTeamInitials: "bra",
                awayTeam: "servia",
                awayTeamInitials: "srb",
                status: 2,
                dateTime: "24/11/2022",
                stadium: "lusail",
                winner: "brasil",
                homeTeamResult: {
                  team: "brasil",
                  goals: 4,
                },
                awayTeamResult: {
                  team: "servia",
                  goals: 0,
                },
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
                status: 3,
                dateTime: "28/11/2022",
                stadium: "AL JANOUB",
                homeTeamResult: {
                  team: "camarões",
                  goals: 3,
                },
                awayTeamResult: {
                  team: "servia",
                  goals: 3,
                },
              },
              {
                homeTeam: "brasil",
                homeTeamInitials: "bra",
                awayTeam: "suiça",
                awayTeamInitials: "che",
                status: 2,
                dateTime: "28/11/2022",
                stadium: "stadium 974",
                winner: "brasil",
                homeTeamResult: {
                  team: "brasil",
                  goals: 3,
                },
                awayTeamResult: {
                  team: "suiça",
                  goals: 1,
                },
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
                status: 2,
                dateTime: "02/12/2022",
                stadium: "lusail",
                winner: "brasil",
                homeTeamResult: {
                  team: "camarões",
                  goals: 0,
                },
                awayTeamResult: {
                  team: "brasil",
                  goals: 5,
                },
              },
              {
                homeTeam: "servia",
                homeTeamInitials: "srb",
                awayTeam: "suiça",
                awayTeamInitials: "che",
                status: 3,
                dateTime: "02/12/2022",
                stadium: "stadium 974",
                homeTeamResult: {
                  team: "servia",
                  goals: 3,
                },
                awayTeamResult: {
                  team: "suiça",
                  goals: 3,
                },
              },
            ],
          },
        ],
      },
      {
        title: "grupo B",
        rodadas: [
          {
            matches: [
              {
                homeTeam: "Suiça",
                homeTeamInitials: "che",
                awayTeam: "camarões",
                awayTeamInitials: "cmr",
                status: 0,
                dateTime: "24/11/2022",
                stadium: "AL JANOUB",
              },
              {
                homeTeam: "brasil",
                homeTeamInitials: "bra",
                awayTeam: "servia",
                awayTeamInitials: "srb",
                status: 0,
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
                status: 0,
                dateTime: "28/11/2022",
                stadium: "AL JANOUB",
              },
              {
                homeTeam: "brasil",
                homeTeamInitials: "bra",
                awayTeam: "suiça",
                awayTeamInitials: "che",
                status: 0,
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
                status: 0,
                dateTime: "02/12/2022",
                stadium: "lusail",
              },
              {
                homeTeam: "servia",
                homeTeamInitials: "srb",
                awayTeam: "suiça",
                awayTeamInitials: "che",
                status: 0,
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
/*

Status:
0 = não disputada
1 = em andamento
2 = finalizado com vencedor
3 = finalizado com empate
*/
</script>

<style></style>
