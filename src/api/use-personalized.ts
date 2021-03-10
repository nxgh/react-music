import useSWR from 'swr'
import { getFetcher, baseUrl } from './index'

const personalizeUrl = baseUrl`/personalized`

interface baseType {
  isLoading: boolean
  isError: boolean
}

export interface IPersonalizedItem {
  imageUrl: string
  [propName: string]: string | boolean | number | null
}

interface IPersonalizedData {
  banners: IPersonalizedItem[]
  code: number
}

interface IPersonalizedResp extends baseType {
  data: IPersonalizedData
}

const usePersonalized = (): IPersonalizedResp => {
  const { data, error } = useSWR(personalizeUrl, getFetcher)
  return {
    data: data?.result,
    isLoading: !error && !data,
    isError: error,
  }
}

export default usePersonalized
