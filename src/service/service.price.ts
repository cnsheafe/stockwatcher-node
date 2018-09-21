import fetch from '../lib/lib.fetch'


export default class PriceService {
  constructor (apiKey: string) {
    this.apiKey = apiKey
  }

  private apiKey: string

  async getIntraday (symbol: string, interval: number): Promise<{}> {
    const prices = await fetch({
      method: 'GET',
      hostname: `www.alphavantage.co`,
      path: `/query?function=time_series_intraday&symbol=${symbol}&interval=${interval}min&apikey=${this.apiKey}`,
    })

    return JSON.parse(prices.data)
  }
}
