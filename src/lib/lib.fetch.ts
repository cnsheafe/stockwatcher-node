import { request, RequestOptions } from 'https'

interface IFetchResponse {
  data: string,
  status: number
}

const fetch = async (options: RequestOptions, body?: string) => {
  return new Promise<IFetchResponse>((resolve, reject) => {
    const req = request(options, (res) => {
      let data = ''
      res
        .setEncoding('utf8')
        .on('data', (d) => {
          data += d
        })
        .on('error', (err) => reject({ err, status: res.statusCode }))
        .on('close', () => resolve({ data, status: res.statusCode }))
    })

    if (options.method !== 'GET') req.write(body)

    req.on('error', (err) => reject({ err }))
    req.end()
  })
}

export default fetch
