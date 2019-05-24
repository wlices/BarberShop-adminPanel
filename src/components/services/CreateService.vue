<template>
  <div class="create-service">
    <div class="va-row">
      <div class="flex xs12 md12">
        <vuestic-widget headerText="Criar Novo Serviço">
          <form>
            <div class="va-row flex-center align--center justify--center">
              <div class="flex md4">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input @keyup.enter.prevent="postServices()" id="simple-input" v-model="service.name" required/>
                      <label class="control-label" for="simple-input">
                        Nome
                      </label>
                      <i class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input @keyup.enter.prevent="postServices()" id="simple-input" v-model="service.price" required/>
                      <label class="control-label" for="simple-input">
                        Preço
                      </label>
                      <i class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input @keyup.enter.prevent="postServices()" id="simple-input" v-model="service.description" required/>
                      <label class="control-label" for="simple-input">
                        Descrição
                      </label>
                      <i class="bar"></i>
                    </div>
                  </div>

                  <div class="flex-center align--center justify--center" style="width: 100%;">
                    <router-link :to="{ name: 'services'}">
                      <button class="btn btn-sm" style="margin-bottom: 35px;">
                        Voltar
                      </button>
                    </router-link>
                    <button
                      class="btn btn-primary btn-sm"
                      style="margin-bottom: 35px; margin-left: 2%;"
                      @click.prevent="postServices()"
                    >
                      Criar
                    </button>
                  </div>
                </fieldset>
              </div>
            </div>

          </form>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
import {
  postServices,
} from '@/api/services'

export default {
  name: 'create-service',
  data() {
    return {
      service: {
        name: '',
        price: '',
        description: ''
      }
    }
  },
  methods: {
    postServices() {
      postServices(this.service).then((response) => {
        this.$router.push('/services')
      }).catch((error) => {
        this.flash(error.response.data.message, 'error', {
          timeout: 1500
        })
      })
    }
  }
}

</script>
<style lang="scss" scoped>
</style>
