<template>
  <div class="column justify-center card q-gutter-y-xs">
    <span class="text-center">DOM 20/11/2022 AL BAYT 13:00</span>
    <div class="row justify-center">
      <div class="col-4 row q-gutter-xs justify-start">
        <span class="text-h6 text-uppercase">{{ homeTeamInitials }}</span>
        <q-img
          :src="urlflag + homeTeamInitials"
          class="card__flag"
          ratio="16/9"
        />
        <PB-input
          class="card__input"
          input-class="text-center text-white"
          :placeholder="homeTeamGoals ? homeTeamGoals : 0"
          borderless
          dense
          @blur="verifyBet"
          :type="'number'"
          :disable="statusGame != 0"
          v-model="bets.homeGoals"
        />
      </div>

      <span class="text-h5">X</span>

      <div class="col-4 row q-gutter-xs justify-end">
        <PB-input
          class="card__input"
          input-class="text-center text-white"
          :placeholder="awayTeamGoals ? awayTeamGoals : 0"
          borderless
          dense
          @blur="verifyBet"
          :type="'number'"
          :disable="statusGame != 0"
          v-model="bets.awayGoals"
        />
        <q-img
          :src="urlflag + awayTeamInitials"
          class="card__flag"
          ratio="16/9"
        />
        <span class="text-h6 text-uppercase">{{ awayTeamInitials }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import PBInput from "src/components/generic/PBInput.vue";

export default defineComponent({
  components: { PBInput },
  name: "PBCardGame",
  props: {
    homeTeam: {
      type: String,
    },
    awayTeam: {
      type: String,
    },
    homeTeamInitials: {
      type: String,
    },
    awayTeamInitials: {
      type: String,
    },
    homeTeamGoals: {
      type: String,
    },
    awayTeamGoals: {
      type: String,
    },
    statusGame: {
      type: String,
    },
    idMatch: {
      type: String,
    },
    betGoalsHome: {
      type: String,
    },
    betGoalsAway: {
      type: String,
    },
  },
  setup(prop, { emit }) {
    const urlflag = "https://countryflagsapi.com/svg/";
    const bets = ref({});
    bets.value.homeGoals = prop.betGoalsHome ? prop.betGoalsHome : null;
    bets.value.awayGoals = prop.betGoalsAway ? prop.betGoalsAway : null;

    const verifyBet = () => {
      if (!bets.value.awayGoals || !bets.value.homeGoals) {
        return;
      } else {
        bets.value.idMatch = prop.idMatch;
        emit("emitBet", bets.value);
      }
    };

    return {
      urlflag,
      bets,
      verifyBet,
    };
  },
});
</script>

<style lang="scss" scoped>
.card {
  height: 35%;
  border: 1px solid $primary;
  width: 100%;
}

.card__input {
  border: 1px solid $primary;
  border-radius: 5%;
  padding: 0px 5px 2px 5px;
  height: 67%;
  width: 25%;
  text-align: right;
}

.card__flag {
  width: 25%;
  height: 67%;
}
</style>
