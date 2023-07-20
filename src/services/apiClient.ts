import axios from 'axios'

const Client = (base: string) => {
  return axios.create({
    baseURL: base,
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const request = (Client: (arg0: any) => Promise<any>, options: any) => {
  return Client(options)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => {
      console.log(
        `Error when making an http request to url: ${options.url}`,
        error,
      )
      return Promise.reject(error)
    })
}

export default Client
