import useSWR from 'swr'
import { getFetcher, baseUrl } from './index'
import { IBaseReturnType } from './types'

const bannerUrl = baseUrl`/banner`



export interface IBannerItem {
  imageUrl: string
  [propName: string]: string | boolean | number | null
}

interface IBannerData {
  banners: IBannerItem[]
  code: number
}

type IBannerResp = IBannerData | undefined

interface IUseBannerResp extends IBaseReturnType {
  data: IBannerItem[] | undefined
}

const useBanner = (): IUseBannerResp => {
  const { data, error } = useSWR<IBannerResp>(bannerUrl, getFetcher)
  return {
    data: data?.banners,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useBanner
