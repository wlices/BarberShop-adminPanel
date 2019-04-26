<template>
  <div class="services">
    <div class="va-row">
      <div class="flex xs12 md12">
        <router-link :to="{ name: 'create-service'}">
          <button class="btn btn-primary btn-micro" style="margin-bottom: 35px;">
            Criar
          </button>
        </router-link>
        <vuestic-widget headerText="Serviços">
          <div class="table-responsive">
            <table class="table table-striped first-td-padding">
              <thead>
              <tr>
                <td>Nome</td>
                <td>Preço</td>
                <td>Descrição</td>
                <td align="right">Ações</td>
              </tr>
              </thead>
              <tbody>
              <tr v-for="service in services">
                <td>{{ service.name }}</td>
                <td>{{ service.price }}</td>
                <td>{{ service.description }}</td>
                <td align="right">
                  <div>
                    <router-link
                      class="btn btn-info btn-micro"
                      :to="{ name: 'update-service', params: { id: service._id }}"
                    >
                      Alterar
                    </router-link>
                    <button
                      class="btn btn-danger btn-micro"
                      style="margin-left: 2%;"
                      @click="showDeleteModal(service._id)"
                    >
                      Excluir
                    </button>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </vuestic-widget>
      </div>
    </div>

    <vuestic-modal
      ref="deleteModal"
      okText="Deletar"
      cancelText="Cancelar"
    >
      <div slot="title">Deletar Serviço</div>
      <div>
        <span>
          Você tem certeza que deseja deletar esse serviço?
        </span>
      </div>
    </vuestic-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  deleteServices,
} from '@/api/services'

export default {
  name: 'services',
  computed: {
    ...mapGetters([
      'services'
    ])
  },
  data() {
    return {
      serviceId: ''
    }
  },
  methods: {
    showDeleteModal (serviceId) {
      this.serviceId = serviceId
      this.$refs.deleteModal.open()
    },
    deleteService() {
      const that = this
      deleteServices(this.serviceId).then(() => {
        that.$store.dispatch('getServices')
      })
    }
  },
  mounted() {
    this.$store.dispatch('getServices')
  }
}

</script>
<style lang="scss" scoped>
</style>
