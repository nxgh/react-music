import useSWR from 'swr'
import { getFetcher, baseUrl } from './index'

const bannerUrl = baseUrl`/banner`

interface baseType {
  isLoading: boolean
  isError: boolean
}

export interface IBannerItem {
  imageUrl: string
  [propName: string]: string | boolean | number | null
}

interface IBannerData {
  banners: IBannerItem[]
  code: number
}

interface IBannerResp extends baseType {
  data: IBannerData
}

const useBanner = (): IBannerResp => {
  const { data, error } = useSWR(bannerUrl, getFetcher)
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useBanner
