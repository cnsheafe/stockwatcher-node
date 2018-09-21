import { ServerRoute } from 'hapi'
import PriceService from '../../service/service.price'

const priceIntervalEnum = {
  1: 1,
  5: 5,
  15: 15,
  30: 30,
  60: 60,
}

export const getIntradayPrice = (service: PriceService): ServerRoute => ({
  method: 'GET',
  path: '/price/intraday',
  handler: async (req, h) => {
    const { symbol, interval } = req.query as { symbol: string, interval: string }

    let priceInterval: number = priceIntervalEnum[interval]

    if (!priceInterval) priceInterval = 1
    if (!symbol) return h.response('Symbol query variable required.').code(400)

    try {
      const prices = await service.getIntraday(symbol, priceInterval)

      return h.response(prices).code(200)
    } catch (error) {
      // tslint:disable-next-line no-console
      console.log(error)

      return h.response('There was an error.').code(500)
    }
  },
})
