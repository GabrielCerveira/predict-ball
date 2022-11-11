<template>
  <div class="row q-pa-xl window-height">
    <div class="col-sm-5 col-md-8 gt-xs">conteudo</div>
    <div class="col-xs-12 col-sm-7 col-md-4 authentication">
      <div class="q-pa-md q-gutter-y-md authentication-login">
        <div class="col-12 text-center">
          <span>Predict Ball</span>
        </div>
        <div>
          <PB-input :label="'Email'" :type="'email'" v-model="email"/>
          <PB-input :label="'Senha'" :type="'password'" v-model="email"/>
          <PB-input :label="'Data'" :type="'date'" v-model="email"/>
        </div>
        <div class="q-mb-lg">
          <q-btn
            label="Entrar"
            class="full-width"
          />
        </div>
        <q-separator size="1px" />
        <div class="q-mt-lg">
          <q-btn
            icon="mdi-google-plus"
            label="Entrar com Google"
            class="full-width"
          />
          <q-btn
            flat
            label="Esqueceu a senha?"
            class="full-width"
          />
        </div>
      </div>
      <div class="q-pa-md q-my-lg text-center authentication-create">
        <span>Não tem uma conta? Cadastre-se</span>
      </div>
    </div>
  </div>
</template>

<script>
import PBInput from "src/components/generic/PBInput.vue"
import { defineComponent, ref } from "vue"

export default defineComponent({
  components: { PBInput },
  name: "LoginPage",
  setup(){
    return{
      email: ref('')
    }
  }
})
</script>

<style lang="scss" scoped>
.authentication-login {
  border: 1px solid rgba(17, 17, 17, 0.137);
}

.authentication-create {
  border: 1px solid rgba(17, 17, 17, 0.137);
}
</style>
