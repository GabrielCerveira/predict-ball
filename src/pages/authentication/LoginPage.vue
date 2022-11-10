<template>
  <div class="row q-pa-xl">
    <div class="col-sm-5 col-md-8 gt-xs">
      conteudo
    </div>
    <div class="col-xs-12 col-sm-7 col-md-4 authentication">
      <div class="q-pa-md q-gutter-md authentication-login">
        <div class="col-12 text-center">
          <span>Predict Ball</span>
        </div>
        <div>
          <q-input class="col-12"  placeholder="Insira o seu e-mail"> </q-input>
          <q-input placeholder="Senha" type="password"> </q-input>
        </div>
        <div class="q-mb-lg">
          <q-btn label="Entrar" class="full-width"></q-btn>
        </div>
        <q-separator size="1px"/>
        <div class="q-mt-lg">
          <q-btn icon="mdi-google-plus" label="Entrar com Google" class="full-width"></q-btn>
          <q-btn flat label="Esqueceu a senha?" class="full-width"></q-btn>
        </div>
      </div>
      <div class="q-pa-md q-my-lg text-center authentication-create">
        <span>Não tem uma conta? Cadastre-se</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: "LoginPage",
})
</script>

<style lang="scss" scoped>
.authentication-login{
  border: 1px solid rgba(17, 17, 17, 0.137);
}

.authentication-create{
  border: 1px solid rgba(17, 17, 17, 0.137);
}
</style>

