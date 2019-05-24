<template>
  <div class="update-service">
    <div class="va-row">
      <div class="flex xs12 md12">
        <vuestic-widget headerText="Atualizar Serviço">
          <form>
            <div class="va-row flex-center align--center justify--center">
              <div class="flex md4">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" v-model="service.name" required/>
                      <label class="control-label" for="simple-input">
                        Nome
                      </label>
                      <i class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" v-model="service.price" required/>
                      <label class="control-label" for="simple-input">
                        Preço
                      </label>
                      <i class="bar"></i>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input id="simple-input" v-model="service.description" required/>
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
                      class="btn btn-info btn-sm"
                      style="margin-bottom: 35px; margin-left: 2%;"
                      @click.prevent="putServices()"
                    >
                      Atualizar
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
  getServiceById,
  putServices
} from '@/api/services'

export default {
  name: 'update-service',
  data() {
    return {
      service: {
        name: '',
        price: '',
        description: ''
      }
    }
  },
  mounted() {
    const that = this
    getServiceById(this.$route.params.id).then(response => {
      that.service.name = response.data.name
      that.service.price = response.data.price
      that.service.description = response.data.description
    })
  },
  methods: {
    putServices() {
      putServices(this.service, this.$route.params.id).then(response => {
        this.$router.push('/services')
        this.flash('Serviço atualizado com sucesso', 'success', {
          timeout: 1500
        })
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
