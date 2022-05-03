<template>
  <div class="container-fluid">
    <div v-if="campaign">
      <div class="row justify-content-center p-2">
        <div class="col-md-6">
          <div class="bg-light shadow rounded p-2">
            <h1>{{ campaign.title }}</h1>
            <p>{{ campaign.description }}</p>
            <h4>Goal: ${{ campaign.goal }}</h4>
          </div>
        </div>
      </div>
      <div class="row justify-content-center p-2">
        <div class="col-md-6">
          <div class="bg-light shadow rounded p-2">
            <form>
              <div class="form-control bg-light p-2">
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  placeholder="Enter Donation..."
                  class="form-control"
                />
                <div class="d-flex justify-content-end">
                  <button class="btn btn-success mt-2 ms-auto">Donate</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="row justify-content-center p-2">
        <div class="col-md-6">
          <div class="bg-light shadow rounded p-2">
            <div v-if="donations.length > 0">
              <!-- TODO need to display donation component when we get that data -->
            </div>
            <div v-else>
              <h5>No Donations currently.....</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>Loading...</h1>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { campaignsService } from "../services/CampaignsService"
import { useRoute } from "vue-router"
import { AppState } from "../AppState"
export default {
  setup() {
    const route = useRoute()
    onMounted(async () => {
      try {
        AppState.donations = []
        AppState.campaign = null
        await campaignsService.getCampaignById(route.params.id)
        // TODO need to go get donations by campaign
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      campaign: computed(() => AppState.campaign),
      donations: computed(() => AppState.donations)
    }
  }
}
</script>


<style lang="scss" scoped>
.row-height {
  height: 50vh;
}
</style>
