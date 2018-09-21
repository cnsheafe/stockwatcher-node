import { getIntradayPrice } from './price.get-intraday'
import PriceService from '../../service/service.price'

const { AV_KEY } = process.env
const priceService = new PriceService(AV_KEY)

export default [
  getIntradayPrice(priceService),
]
