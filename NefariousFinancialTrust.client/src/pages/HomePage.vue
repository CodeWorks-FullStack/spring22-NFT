<template>
  <div class="container-fluid">
    <div class="row p-2">
      <div class="col-md-2">
        <!-- TODO need to get these working -->
        <button class="btn btn-success square-right">Open</button>
        <button class="btn btn-danger square-left">Closed</button>
      </div>
    </div>
    <div class="row p-2">
      <Campaign v-for="c in campaigns" :key="c.id" :campaign="c" />
    </div>
  </div>
</template>

<script>
import { computed, watchEffect } from "@vue/runtime-core"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { campaignsService } from "../services/CampaignsService"
import { AppState } from "../AppState"
export default {
  name: 'Home',
  setup() {
    watchEffect(async () => {
      try {
        await campaignsService.getCampaigns()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      campaigns: computed(() => AppState.campaigns)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
