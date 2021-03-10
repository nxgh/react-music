import useSWR from 'swr'
export const baseUrl = path => `http://localhost:9900${path}`

// export const getFetcher = (...args: any[]) => fetch(...args).then(res => res.json())
export const getFetcher = (url: string) => fetch(url).then(res => res.json())

export const postFetcher = (...args: any[]) => fetch(...args).then(res => res.json())
