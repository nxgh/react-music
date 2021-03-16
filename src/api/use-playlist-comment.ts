import useSWR from 'swr'
import { baseUrl, getFetcher } from './index'
import { IBaseReturnType } from './types/base-return'
import { IPlaylistComment, IComment } from './types/playlist-comment'

const playlistComment = baseUrl`/comment/playlist`




interface IPlayListCommentsResp extends IBaseReturnType {
    comments: IComment[] | undefined
}

const usePlaylistComment = (id: string | number): IPlayListCommentsResp => {
    const { data, error } = useSWR<IPlaylistComment>(`${playlistComment}?id=${id}`, getFetcher)
    return {
        comments: data?.comments,
        isLoading: !error && !data,
        isError: error,
    }
}

export default usePlaylistComment