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
    console.log("console2", props.tableMatch.rodadas.length);
    return {
      round,
      handleDefinitionMatch,
      matches,
    };
  },
});
</script>

<style></style>
