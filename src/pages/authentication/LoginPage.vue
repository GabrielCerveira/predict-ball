<template>
  <div class="row q-pa-xl window-height bg-dark flex flex-center">
    <div class="col-xs-12 col-sm-7 col-md-4 authentication">
      <div class="q-pa-md q-gutter-y-md authentication__login border">
        <div class="col-12 text-center">
          <span class="text-h4 text-primary">Predict Ball</span>
        </div>
        <div>
          <PB-input dark :label="'Email'" :type="'email'" v-model="email" />
          <PB-input dark :label="'Senha'" :type="'password'" v-model="email" />
        </div>
        <div class="q-mb-lg">
          <q-btn outline color="primary" label="Entrar" class="full-width" />
        </div>
        <q-separator size="1px" color="primary" />
        <div class="q-mt-lg">
          <q-btn
            icon="mdi-google-plus"
            color="primary"
            label="Entrar com Google"
            class="full-width"
          />
          <q-btn
            flat
            color="primary"
            label="Esqueceu a senha?"
            class="full-width"
          />
        </div>
      </div>
      <div class="q-pa-md q-my-lg text-center authentication__create border">
        <span class="text-white"
          >Não tem uma conta?
          <a class="text-primary" style="text-decoration: none" href="#"
            >Cadastre-se</a
          ></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import PBInput from "src/components/generic/PBInput.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { PBInput },
  name: "LoginPage",
  setup() {
    return {
      email: ref(""),
    };
  },
});
</script>

<style lang="scss" scoped>
.authentication__login {
  border: 1px solid $primary;
  box-shadow: 0 0 5px 0.1px $primary;
}

.authentication__create {
  border: 1px solid $primary;
  box-shadow: 0 0 5px 0.1px $primary;
}
/*borda animanda
.border{
  overflow: hidden;
  position: relative;
}

.border #border:nth-child(1){
	position: absolute;
	top: 0;
	left: 0;
	width: 50%;
	height: 0px;
	background: $primary;
	animation: animate1 1s linear infinite;
}

@keyframes animate1{
	0%{
		transform: translateX(-100%);
	}

	100%{
		transform: translateX(100%);
	}
}

.border #border:nth-child(2){
	position: absolute;
	top: 0;
	right: 0;
	width: 0.1px;
	height: 30%;
	animation: animate2 4s linear infinite;
	animation-delay: 4s;
  box-shadow:
    0 0 10px 0.1px $primary;
}

@keyframes animate2{
	0%{
		transform: translateY(-100%);
	}

	100%{
		transform: translateY(100%);
	}
}

.border #border:nth-child(3){
	position: absolute;
	bottom: 0;
	left: 0;
	width: 50%;
	height: 2px;
	background: $primary;
	animation: animate3 5s linear infinite;
}

@keyframes animate3{
	0%{
		transform: translateX(100%);
	}

	100%{
		transform: translateX(-100%);
	}
}

.border #border:nth-child(4){
	position: absolute;
	top: 0;
	left: 0;
	width: 2px;
	height: 50%;
	background: $primary;
	animation: animate4 5s linear infinite;
	animation-delay: 4s;
}

@keyframes animate4{
	0%{
		transform: translateY(100%);
	}

	100%{
		transform: translateY(-100%);
	}
}
*/
</style>
