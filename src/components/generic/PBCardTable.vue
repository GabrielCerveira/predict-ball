<template>
  <div class="row">
    <div class="col-7 q-pr-xs">
      <PB-classification :seed="handleGetEquipUnic()" />
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
        :homeTeamGoals="match.homeTeamResult ? match.homeTeamResult.goals : ''"
        :awayTeamGoals="match.awayTeamResult ? match.awayTeamResult.goals : ''"
        :statusGame="match.status"
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
      }
    };

    handleDefinitionMatch();

    const handleGetEquipUnic = () => {
      var home = new Set();
      const teams = [];

      /*team!,
        points,
        games!,
        wins!,
        draw!-,
        defeats!,
        goalsScored!,
        goalsConceded!,
        balance!,*/

      for (let round = 0; round < props.tableMatch.rodadas.length; round++) {
        for (
          let match = 0;
          match < props.tableMatch.rodadas[round].matches.length;
          match++
        ) {
          //
          const array = [
            props.tableMatch.rodadas[round].matches[
              match
            ].homeTeam.toLowerCase(),
            props.tableMatch.rodadas[round].matches[
              match
            ].awayTeam.toLowerCase(),
          ];
          for (let index = 0; index < array.length; index++) {
            if (!home.has(array[index])) {
              //adiciona um valor unico na var home atraves do set
              home.add(array[index]);
              //Cria um objto no array teams
              teams.push({
                team: array[index],
              });
            }
          }

          const pos = teams
            .map((e) => e.team)
            .indexOf(
              props.tableMatch.rodadas[round].matches[
                match
              ].homeTeam.toLowerCase()
            );

          const posAway = teams
            .map((e) => e.team)
            .indexOf(
              props.tableMatch.rodadas[round].matches[
                match
              ].awayTeam.toLowerCase()
            );

          ////

          if (props.tableMatch.rodadas[round].matches[match].status === 0) {
            if (!teams[pos].points) {
              (teams[pos].points = 0),
                (teams[pos].games = 0),
                (teams[pos].wins = 0),
                (teams[pos].draw = 0),
                (teams[pos].defeats = 0),
                (teams[pos].goalsScored = 0);
            } else {
              (teams[pos].points = teams[pos].points + 0),
                (teams[pos].games = teams[pos].games + 0),
                (teams[pos].wins = teams[pos].wins + 0),
                (teams[pos].draw = teams[pos].draw + 0),
                (teams[pos].defeats = teams[pos].defeats + 0),
                (teams[pos].goalsScored = teams[pos].goalsScored + 0);
            }
          } else {
            const array = [
              props.tableMatch.rodadas[round].matches[
                match
              ].homeTeam.toLowerCase(),
              props.tableMatch.rodadas[round].matches[
                match
              ].awayTeam.toLowerCase(),
            ];
            for (let index = 0; index < array.length; index++) {
              const posTeam = teams.map((e) => e.team).indexOf(array[index]);
              // adiciona as partidas jogadas pelos times
              teams[posTeam].games = teams[posTeam].games
                ? teams[posTeam].games + 1
                : 1;
              // adiciona as vitorias dos times
              teams[posTeam].wins =
                teams[posTeam].team ===
                props.tableMatch.rodadas[round].matches[match].winner
                  ? !teams[posTeam].wins
                    ? 1
                    : teams[posTeam].wins + 1
                  : !teams[posTeam].wins
                  ? 0
                  : teams[posTeam].wins;

              // adiciona os empates dos times
              teams[posTeam].draw =
                props.tableMatch.rodadas[round].matches[match].status === 3
                  ? !teams[posTeam].draw
                    ? 1
                    : teams[posTeam].draw + 1
                  : !teams[posTeam].draw
                  ? 0
                  : teams[posTeam].draw;
            }

            //Adiciona os gols marcados pelo time da casa
            teams[pos].goalsScored = !teams[pos].goalsScored
              ? props.tableMatch.rodadas[round].matches[match].homeTeamResult
                  .goals
              : teams[pos].goalsScored +
                props.tableMatch.rodadas[round].matches[match].homeTeamResult
                  .goals;

            //Adiciona os gols sofridos pelo time da casa
            teams[pos].goalsConceded = !teams[pos].goalsConceded
              ? props.tableMatch.rodadas[round].matches[match].awayTeamResult
                  .goals
              : teams[pos].goalsConceded +
                props.tableMatch.rodadas[round].matches[match].awayTeamResult
                  .goals;

            //
            //Adiciona os gols marcados pelo time da casa
            teams[posAway].goalsScored = !teams[posAway].goalsScored
              ? props.tableMatch.rodadas[round].matches[match].awayTeamResult
                  .goals
              : teams[posAway].goalsScored +
                props.tableMatch.rodadas[round].matches[match].awayTeamResult
                  .goals;

            //Adiciona os gols sofridos pelo time da casa
            teams[posAway].goalsConceded = !teams[posAway].goalsConceded
              ? props.tableMatch.rodadas[round].matches[match].homeTeamResult
                  .goals
              : teams[posAway].goalsConceded +
                props.tableMatch.rodadas[round].matches[match].homeTeamResult
                  .goals;
          }
        }
      }

      for (let index = 0; index < teams.length; index++) {
        //calcula as derrotas do time
        teams[index].defeats =
          teams[index].games - teams[index].draw - teams[index].wins;
        //calcula o saldo de gols do time
        teams[index].balance =
          teams[index].goalsScored - teams[index].goalsConceded;
        //calcula os pontos do time
        teams[index].points = teams[index].wins * 3 + teams[index].draw;
        const element = teams[index];
        console.log("teste element", element);
      }

      return teams;
    };

    console.log("teste handleget", handleGetEquipUnic());

    return {
      round,
      handleDefinitionMatch,
      handleGetEquipUnic,
      matches,
    };
  },
});
</script>

<style></style>
