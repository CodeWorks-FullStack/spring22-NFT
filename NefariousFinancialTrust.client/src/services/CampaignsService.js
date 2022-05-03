import { AppState } from "../AppState"
import { api } from "./AxiosService"

class CampaignsService {
  async getCampaigns() {
    const res = await api.get('api/campaigns')
    AppState.campaigns = res.data
  }

  async getCampaignById(campaignId) {
    const res = await api.get('api/campaigns/' + campaignId)
    AppState.campaign = res.data
  }
}

export const campaignsService = new CampaignsService()
