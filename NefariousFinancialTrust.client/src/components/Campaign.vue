<template>
  <div class="col-md-4 mb-2">
    <router-link :to="{ name: 'CampaignPage', params: { id: campaign.id } }">
      <div class="bg-light shadow rounded p-2">
        <h1>{{ campaign.title }}</h1>
        <p class="clip-text">{{ campaign.description }}</p>
        <h4 class="m-0">Goal: ${{ campaign.goal }}</h4>
      </div>
    </router-link>
  </div>
</template>


<script>
export default {

  props: {
    campaign: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
a {
  color: black !important;
}
</style>
