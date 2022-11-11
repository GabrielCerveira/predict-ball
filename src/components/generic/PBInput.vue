<template>
  <q-input
   :model="value"
   :label="label"
   :type="[type !== 'password' ? type : isPwd ? 'password' : 'text']"
  >
    <template v-slot:append>
       <!--Templeate de senha-->
      <q-icon
        v-if="type === 'password'"
        :name="isPwd ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="isPwd = !isPwd"
      />

      <!--Templeate de data-->
      <q-icon v-if="type === 'date'" name="event" class="cursor-pointer">
        <q-popup-proxy transition-show="scale" transition-hide="scale">
          <q-date v-model="date">
            <div class="row items-center justify-end">
               <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "PBinput",
  props: {
    value:{
      type: String
    },
    type:{
      type: String,
      default: 'text'
    },
    label:{
      type:String
    }
  },
  setup(){
    return{
      isPwd: ref(true)
    }
  }
})
</script>

<style>


</style>
