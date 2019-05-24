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
      :show.sync="show"
      ref="deleteModal"
      :hideDefaultActions="true"
      :cancelClass="'none'"
      :okClass="'none'"
    >
      <div slot="title">Deletar Serviço</div>
      <div>
        <span>
          Você tem certeza que deseja deletar esse serviço?
        </span>
        <div class="flex-center align--center justify--center" style="margin-top: 25px;">
          <button
            class="btn btn-secondary btn-small"
            @click="closeDeleteModal()"
          >
            Voltar
          </button>
          <button
            class="btn btn-primary btn-small"
            style="margin-left: 2%;"
            @click="deleteService()"
          >
            Excluir
          </button>
        </div>
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
      serviceId: '',
      show: false
    }
  },
  methods: {
    showDeleteModal(serviceId) {
      this.serviceId = serviceId
      this.$refs.deleteModal.open()
    },
    closeDeleteModal() {
      this.$refs.deleteModal.close()
    },
    deleteService() {
      const that = this
      console.log(this.serviceId)
      deleteServices(this.serviceId).then(() => {
        that.$store.dispatch('getServices')
        that.closeDeleteModal()
        that.flash('Serviço deletado com sucesso', 'success', {
          timeout: 1500
        })
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
