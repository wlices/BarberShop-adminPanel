<template>
  <div class="login">
    <h2>Bem Vindo</h2>
    <form method="post" action="/auth/login" name="login">
      <div class="form-group">
        <div class="input-group">
          <input v-model="loginForm.email" type="text" id="email" required="required"/>
          <label class="control-label" for="email">
            {{ $t('auth.email') }}
          </label>
          <i class="bar"/>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input v-model="loginForm.senha" type="password" id="password" required="required"/>
          <label class="control-label" for="password">
            {{ $t('auth.password') }}
          </label>
          <i class="bar"/>
        </div>
      </div>
      <div class="d-flex align--center justify--center">
        <button class="btn btn-primary" @click.prevent="handleLogin()">
          {{ $t('auth.login') }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        email: '',
        senha: ''
      }
    }
  },
  methods: {
    handleLogin() {
      const that = this
        this.$store.dispatch('loginByEmail', this.loginForm).then(() => {
          this.loading = false
          this.$router.push({
            path: '/'
          })
          this.flash('Login realizado com sucesso', 'success', {
            timeout: 1500
          })
        }).catch((error) => {
          this.loading = false
          this.flash(error.response.data.message, 'error', {
            timeout: 1500
          })
        })
      }
    }
  }
</script>

<style lang="scss">
.login {

  @include media-breakpoint-down(md) {
    width: 100%;
    padding-right: 2rem;
    padding-left: 2rem;
    .down-container {
      display: none;
    }
  }

  h2 {
    text-align: center;
  }
  width: 21.375rem;

  .down-container {
    margin-top: 3.125rem;
  }
}
</style>
