import useSWR from 'swr'
import { getFetcher, baseUrl } from './index'
import { IBaseReturnType } from './types'

const personalizeUrl = baseUrl`/personalized`



export interface IPersonalizedItem {
  picUrl: string
  id: number
  name: string
  playCount: number
  [propName: string]: string | boolean | number | null
}


interface IPersonalizedResp extends IBaseReturnType {
  data: IPersonalizedItem[]
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
