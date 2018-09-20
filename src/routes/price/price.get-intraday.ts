import { ServerRoute } from 'hapi'
import PriceService from '../../service/service.price'

export const getIntradayPrice = (service: PriceService): ServerRoute => ({
  method: 'GET',
  path: '/price',
  handler: async (req, h) => {
    const { symbol } = req.query as { symbol: string }

    if (!symbol) return h.response('Symbol query variable required.').code(400)

    try {
      const prices = await service.getIntraday(symbol)

      return h.response(prices).code(200)
    } catch (error) {
      console.log(error)

      return h.response('There was an error.').code(500)
    }
  },
})
