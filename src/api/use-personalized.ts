import { Result } from 'postcss'
import useSWR from 'swr'
import { getFetcher, baseUrl } from './index'
import { IBaseReturnType } from './types/base-return'
import { Personalized, PersonalizedResult } from './types/personalized'


const personalizeUrl = baseUrl`/personalized`


interface IPersonalizedResp extends IBaseReturnType {
  data: PersonalizedResult[] | undefined
}

const usePersonalized = (): IPersonalizedResp => {
  const { data, error } = useSWR<Personalized | undefined>(personalizeUrl, getFetcher)
  return {
    data: data?.result,
    isLoading: !error && !data,
    isError: error,
  }
}

export default usePersonalized
