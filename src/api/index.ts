import useSWR from 'swr'
export const baseUrl = path => `http://192.168.1.119:9900${path}`

// export const getFetcher = (...args: any[]) => fetch(...args).then(res => res.json())
export const getFetcher = (url: string) => fetch(url).then(res => res.json())

export const postFetcher = (...args: any[]) => fetch(...args).then(res => res.json())
