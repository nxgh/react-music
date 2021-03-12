import useSWR from 'swr'
export const baseUrl = (path: string | TemplateStringsArray): string => `http://192.168.1.119:9900${path}`

// export const getFetcher = (...args: any[]) => fetch(...args).then(res => res.json())

export const getFetcher = async (url: string) => {

    const res = await fetch(url)
    if (!res.ok) {
        const error = new Error('An error occurred while fetching the data.')
        throw error
    }
    return res.json()
}

export const postFetcher = (...args: any[]) => fetch(...args).then(res => res.json())
