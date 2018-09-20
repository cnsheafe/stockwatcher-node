import fetch from '../lib/lib.fetch'


export default class PriceService {
  constructor (apiKey: string) {
    this.apiKey = apiKey
  }

  private apiKey: string

  async getIntraday (symbol: string) {
    const prices = await fetch({
      method: 'GET',
      hostname: `https://www.alphavantage.co`,
      path: `/query?function=time_series_intraday&symbol=${symbol}&interval=1min&apikey=${this.apiKey}`,
    })

    return JSON.parse(prices.data)
  }
}
