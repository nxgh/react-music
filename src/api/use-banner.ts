import useSWR from 'swr'
import { getFetcher, baseUrl } from './index'
import { IBaseReturnType } from './types/base-return'
import { Banner, BannerElement } from './types/banner'

const bannerUrl = baseUrl`/banner`

interface IUseBannerResp extends IBaseReturnType {
  data: BannerElement[] | undefined
}

const useBanner = (): IUseBannerResp => {
  const { data, error } = useSWR<Banner | undefined>(bannerUrl, getFetcher)
  return {
    data: data?.banners,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useBanner
