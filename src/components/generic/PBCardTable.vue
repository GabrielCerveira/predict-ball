<template>
  <div class="row">
    <div class="col-7 q-pr-xs">
      <PB-classification />
    </div>
    <div class="col-5 column q-gutter-y-md no-wrap q-pl-xs">
      <div
        class="col-12 row justify-between items-center"
        style="max-height: 2vw"
      >
        <q-icon
          name="mdi-chevron-left"
          size="2.5rem"
          @click="round === 1 ? '' : (round -= 1) && handleDefinitionMatch()"
          disable
        />
        <span class="text-h6">{{ round }}ª RODADA</span>
        <q-icon
          name="mdi-chevron-right"
          size="2.5rem"
          @click="
            round === tableMatch.rodadas.length
              ? ''
              : (round += 1) && handleDefinitionMatch()
          "
        />
      </div>

      <PB-card-game
        v-for="match in matches"
        :key="match"
        :homeTeamInitials="match.homeTeamInitials"
        :awayTeamInitials="match.awayTeamInitials"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import PBCardGame from "src/components/generic/PBCardGame.vue";
import PBClassification from "src/components/generic/PBClassification.vue";
export default defineComponent({
  name: "PBCardTable",
  props: {
    tableMatch: {
      type: String,
    },
  },
  components: { PBCardGame, PBClassification },
  setup(props) {
    const round = ref(1);
    const matches = ref([]);

    const handleDefinitionMatch = () => {
      if (
        typeof props.tableMatch.rodadas[round.value - 1].matches != undefined
      ) {
        matches.value = props.tableMatch.rodadas[round.value - 1].matches;
      } else {
        console.log(
          "typeof",
          typeof props.tableMatch.rodadas[round.value - 1].matches
        );
        return;
      }
    };

    handleDefinitionMatch();

    const handleGetEquipUnic = () => {
      var home = new Set();
      var away = new Set();
      const teams = [];

      /*team,
        points,
        games,
        wins,
        draws,
        defeats,
        goalsScored,
        goalsConceded,
        balance,*/

      for (let round = 0; round < props.tableMatch.rodadas.length; round++) {
        for (
          let match = 0;
          match < props.tableMatch.rodadas[round].matches.length;
          match++
        ) {
          if (
            !home.has(
              props.tableMatch.rodadas[round].matches[
                match
              ].homeTeam.toLowerCase()
            )
          ) {
            //adiciona um valor unico na var home atraves do set
            home.add(
              props.tableMatch.rodadas[round].matches[
                match
              ].homeTeam.toLowerCase()
            );
            //Cria um objto no array teams
            teams.push({
              team: props.tableMatch.rodadas[round].matches[
                match
              ].homeTeam.toLowerCase(),
            });
          }
          const pos = teams
            .map((e) => e.team)
            .indexOf(
              props.tableMatch.rodadas[round].matches[
                match
              ].homeTeam.toLowerCase()
            );

          ////

          if (props.tableMatch.rodadas[round].matches[match].status === 0) {
            if (teams[pos].points) {
              (teams[pos].points = 0),
                (teams[pos].games = 0),
                (teams[pos].wins = 0),
                (teams[pos].draws = 0),
                (teams[pos].defeats = 0),
                (teams[pos].goalsScored = 0);
            } else {
              (teams[pos].points = teams[pos].points + 0),
                (teams[pos].games = teams[pos].games + 0),
                (teams[pos].wins = teams[pos].wins + 0),
                (teams[pos].draws = teams[pos].draws + 0),
                (teams[pos].defeats = teams[pos].defeats + 0),
                (teams[pos].goalsScored = teams[pos].goalsScored + 0);
            }
          } else {
            teams[pos].games = teams[pos].games ? teams[pos].games + 1 : 1;

            teams[pos].wins =
              teams[pos].team ===
              props.tableMatch.rodadas[round].matches[match].winner
                ? teams[pos].win
                  ? teams[pos].win + 1
                  : 1
                : teams[pos].win
                ? teams[pos].win + 0
                : 0;
            console.log;
            teams[pos].goalsScored = !teams[pos].goalsScored
              ? props.tableMatch.rodadas[round].matches[match].homeTeamResult
                  .goals
              : teams[pos].goalsScored +
                props.tableMatch.rodadas[round].matches[match].homeTeamResult
                  .goals;

            teams[pos].goalsConceded = !teams[pos].goalsConceded
              ? props.tableMatch.rodadas[round].matches[match].awayTeamResult
                  .goals
              : teams[pos].goalsConceded +
                props.tableMatch.rodadas[round].matches[match].awayTeamResult
                  .goals;
            console.log(
              "teste win " + teams[pos].team,
              teams[pos].team ===
                props.tableMatch.rodadas[round].matches[match].winner,
              teams[pos].win
            );
          }
        }
      }

      return teams;
    };

    console.log("teste handleget", handleGetEquipUnic());

    return {
      round,
      handleDefinitionMatch,
      matches,
    };
  },
});
</script>

<style></style>
