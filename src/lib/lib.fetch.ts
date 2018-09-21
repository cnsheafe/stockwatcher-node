import { request, RequestOptions } from 'https'

interface IFetchResponse {
  data: string,
  status: number
}

const fetch = async (options: RequestOptions, body?: string) => {
  return new Promise<IFetchResponse>((resolve, reject) => {
    let data = ''
    let status = 500
    const req = request(options, (res) => {
      res
        .setEncoding('utf8')
        .on('data', (d) => {
          data = data.concat(d)
        })
        .on('error', (err) => reject({ err, status: res.statusCode }))
        .on('end', () => { status = res.statusCode })
    })

    if (options.method !== 'GET') req.write(body)

    req.on('error', (err) => reject(err))
      .on('close', () => {
        resolve({ data, status })
      })
      .end()
  })
}

export default fetch
