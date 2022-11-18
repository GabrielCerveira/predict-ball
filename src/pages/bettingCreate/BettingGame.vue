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
                homeTeam: "Catar",
                homeTeamInitials: "qat",
                awayTeam: "Equador",
                awayTeamInitials: "ecu",
                status: 2,
                dateTime: "20/11/2022",
                stadium: "Al Bayat",
                winner: "Catar",
                homeTeamResult: {
                  team: "Catar",
                  goals: 3,
                },
                awayTeamResult: {
                  team: "Equador",
                  goals: 2,
                },
              },
              {
                homeTeam: "Senegal",
                homeTeamInitials: "sen",
                awayTeam: "Holanda",
                awayTeamInitials: "nld",
                status: 0,
                dateTime: "21/11/2022",
                stadium: "Al Thumama",
              },
            ],
          },
          {
            matches: [
              {
                homeTeam: "Catar",
                homeTeamInitials: "qat",
                awayTeam: "Senegal",
                awayTeamInitials: "sen",
                status: 0,
                dateTime: "25/11/2022",
                stadium: "Al Thumama",
              },
              {
                homeTeam: "Holanda",
                homeTeamInitials: "nld",
                awayTeam: "Equador",
                awayTeamInitials: "ecu",
                status: 0,
                dateTime: "25/11/2022",
                stadium: "Internacional Khalifa",
              },
            ],
          },
          {
            matches: [
              {
                homeTeam: "Holanda",
                homeTeamInitials: "nld",
                awayTeam: "Catar",
                awayTeamInitials: "qat",
                status: 0,
                dateTime: "29/11/2022",
                stadium: "Al Bayat",
              },
              {
                homeTeam: "Equador",
                homeTeamInitials: "ecu",
                awayTeam: "Senegal",
                awayTeamInitials: "sen",
                status: 0,
                dateTime: "29/01/2022",
                stadium: "Internacional Khalifa",
              },
            ],
          },
        ],
      },
      {
        title: "grupo H",
        rodadas: [
          {
            matches: [
              {
                homeTeam: "Suiça",
                homeTeamInitials: "che",
                awayTeam: "Camarões",
                awayTeamInitials: "cmr",
                status: 2,
                dateTime: "24/11/2022",
                stadium: "AL JANOUB",
                winner: "Camarões",
                homeTeamResult: {
                  team: "Suiça",
                  goals: 2,
                },
                awayTeamResult: {
                  team: "Camarões",
                  goals: 3,
                },
              },
              {
                homeTeam: "Brasil",
                homeTeamInitials: "bra",
                awayTeam: "Servia",
                awayTeamInitials: "srb",
                status: 2,
                dateTime: "24/11/2022",
                stadium: "lusail",
                winner: "Brasil",
                homeTeamResult: {
                  team: "Brasil",
                  goals: 4,
                },
                awayTeamResult: {
                  team: "Servia",
                  goals: 1,
                },
              },
            ],
          },
          {
            matches: [
              {
                homeTeam: "Camarões",
                homeTeamInitials: "cmr",
                awayTeam: "Servia",
                awayTeamInitials: "srb",
                status: 3,
                dateTime: "28/11/2022",
                stadium: "AL JANOUB",
                homeTeamResult: {
                  team: "Camarões",
                  goals: 3,
                },
                awayTeamResult: {
                  team: "Servia",
                  goals: 3,
                },
              },
              {
                homeTeam: "Brasil",
                homeTeamInitials: "bra",
                awayTeam: "Suiça",
                awayTeamInitials: "che",
                status: 2,
                dateTime: "28/11/2022",
                stadium: "stadium 974",
                winner: "Brasil",
                homeTeamResult: {
                  team: "Brasil",
                  goals: 3,
                },
                awayTeamResult: {
                  team: "Suiça",
                  goals: 1,
                },
              },
            ],
          },
          {
            matches: [
              {
                homeTeam: "Camarões",
                homeTeamInitials: "cmr",
                awayTeam: "Brasil",
                awayTeamInitials: "bra",
                status: 2,
                dateTime: "02/12/2022",
                stadium: "lusail",
                winner: "Brasil",
                homeTeamResult: {
                  team: "Camarões",
                  goals: 0,
                },
                awayTeamResult: {
                  team: "Brasil",
                  goals: 5,
                },
              },
              {
                homeTeam: "Servia",
                homeTeamInitials: "srb",
                awayTeam: "Suiça",
                awayTeamInitials: "che",
                status: 3,
                dateTime: "02/12/2022",
                stadium: "stadium 974",
                homeTeamResult: {
                  team: "Servia",
                  goals: 3,
                },
                awayTeamResult: {
                  team: "Suiça",
                  goals: 3,
                },
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
