import useSWR from 'swr'
import { baseUrl, getFetcher } from './index'
import { IBaseReturnType } from './types/base-return'
import { IPlayListDetail, Playlist } from './types/play-list-detail'

const playlistDetailUrl = baseUrl`/playlist/detail`




interface IPlayListDetailResp extends IBaseReturnType {
    data: IPlayListDetail | undefined
}

const usePlaylistDetail = (id: string | number): IPlayListDetailResp => {
    const { data, error } = useSWR<IPlayListDetail>(`${playlistDetailUrl}?id=${id}`, getFetcher)
    return {
        data: data,
        isLoading: !error && !data,
        isError: error,
    }
}

export default usePlaylistDetail