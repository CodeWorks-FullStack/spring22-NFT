import { Auth0Provider } from "@bcwdev/auth0provider"
import { donationsService } from "../services/DonationsService.js"
import BaseController from "../utils/BaseController.js"


export class DonationsController extends BaseController{
  constructor(){
    super('api/donations')
    this.router
    .use(Auth0Provider.getAuthorizedUserInfo)
    .post('', this.createDonation)

  }
  async createDonation(req, res, next) {
    try {
        req.body.accountId = req.userInfo.id
        const donation = await donationsService.createDonation(req.body)
        return res.send(donation)
    } catch (error) {
      next(error)
    }
  }
}