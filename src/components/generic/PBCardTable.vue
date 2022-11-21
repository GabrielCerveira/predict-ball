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
        :idMatch="match.idMatch"
        :betGoalsHome="
          match.homeTeamResult ? '' : setBet(match.idMatch, 'home')
        "
        :betGoalsAway="
          match.homeTeamResult ? '' : setBet(match.idMatch, 'away')
        "
        @emitBet="handleSetBet"
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
    const bets = [];

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

      for (let round = 0; round < props.tableMatch.rodadas.length; round++) {
        for (
          let match = 0;
          match < props.tableMatch.rodadas[round].matches.length;
          match++
        ) {
          // Define o array que será adicionado a const teams
          const array = [
            props.tableMatch.rodadas[round].matches[match].homeTeam,
            props.tableMatch.rodadas[round].matches[match].awayTeam,
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

          // recupera a posição no array teams do time da casa
          const pos = teams
            .map((e) => e.team)
            .indexOf(props.tableMatch.rodadas[round].matches[match].homeTeam);
          // recupera a posição no array teams do time visitante
          const posAway = teams
            .map((e) => e.team)
            .indexOf(props.tableMatch.rodadas[round].matches[match].awayTeam);

          // Adiciona as estaticas das partidas ao array teams
          if (props.tableMatch.rodadas[round].matches[match].status === 0) {
            // Adiciona os valores zerados caso a partida não tenha ocorrido
            teams[pos].games = !teams[pos].games ? 0 : teams[pos].games + 0;
            teams[pos].wins = !teams[pos].games ? 0 : teams[pos].wins + 0;
            teams[pos].draw = !teams[pos].games ? 0 : teams[pos].draw + 0;
            teams[pos].goalsScored = !teams[pos].games
              ? 0
              : teams[pos].goalsScored + 0;
            teams[pos].goalsConceded = !teams[pos].games
              ? 0
              : teams[pos].goalsConceded + 0;
          } else {
            // Varre o array array adicionando os resultados da partida no array teams
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

            //Adiciona os gols marcados pelo time visitante
            teams[posAway].goalsScored = !teams[posAway].goalsScored
              ? props.tableMatch.rodadas[round].matches[match].awayTeamResult
                  .goals
              : teams[posAway].goalsScored +
                props.tableMatch.rodadas[round].matches[match].awayTeamResult
                  .goals;

            //Adiciona os gols sofridos pelo time visitante
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
      }

      return teams;
    };

    // Adiciona a bet no array Bets
    const handleSetBet = (val) => {
      if (typeof val.idMatch === undefined) {
        return;
      } else {
        const pos = bets.map((e) => e.idMatch).indexOf(val.idMatch);

        if (pos === -1) {
          bets.push(val);
        } else {
          bets[pos] = val;
        }
      }
    };

    // Verifica se aquele joga tem uma bet e retorna os dados
    const setBet = (idMatch, statusTeam) => {
      const pos = bets.map((e) => e.idMatch).indexOf(idMatch);
      if (pos != -1) {
        if (statusTeam === "home") {
          return bets[pos].homeGoals;
        } else {
          return bets[pos].awayGoals;
        }
      }
    };

    return {
      handleDefinitionMatch,
      handleGetEquipUnic,
      handleSetBet,
      setBet,
      round,
      matches,
      bets,
    };
  },
});
</script>

<style></style>
