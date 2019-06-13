<template>
  <div class="reports">
    <div class="va-row flex-center">
      <div class="flex md6 xs12">
        <vuestic-widget
          class="chart-widget"
          headerText="Relatório de Serviços"
        >
          <vuestic-chart :data="donutChartData" type="donut"/>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  deleteServices,
  getServices
} from '@/api/services'
import {
  getSchedules
} from '@/api/schedules'
import store from 'vuex-store'

let palette = store.getters.palette

export default {
  name: 'services',
  computed: {
    ...mapGetters([
      'services'
    ])
  },
  data() {
    return {
      services: {},
      donutChartData: {
        labels: [],
        datasets: [{
          label: '',
          backgroundColor: [],
          data: [],
        }],
      },
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
    const that = this
    this.$store.dispatch('getServices')
    getServices().then(response => {
      that.services = response.data
    })
    getSchedules().then((response) => {
      response.data.agendamentos.forEach(agendamento => {
        that.services.forEach(service => {
          if (service._id === agendamento.service) {
            if (service.count !== undefined) {
              service.count++
            } else {
              service.count = 1
            }
          }
        })
      })

      that.donutChartData = {
        labels: [],
        datasets: [{
          label: 'Serviços Utilizados (quantidade)',
          backgroundColor: [palette.danger, palette.info, palette.success],
          data: []
        }]
      }

      that.services.forEach(service => {
        that.donutChartData.labels.push(service.name)
        that.donutChartData.datasets[0].data.push(service.count)
      })
    })
  }
}

</script>
<style lang="scss" scoped>
</style>
