import React, { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { isEmptyObj } from '../../utils/tools';
import usePlaylistDetail from '../../api/use-playlist-detail';

interface MTableProps {
    dataSource: object
    columns: any[]
}


const MTable: FC<MTableProps> = ({ dataSource, columns }) => {
    return (
        <div>
        </div>
    )
}


const Rank = () => {
    const location = useLocation()

    const { data } = usePlaylistDetail(location.pathname.split('/')[2])

    if (data?.code !== 200) {
        return <div>未找到歌单</div>
    }
    if (data?.playlist && isEmptyObj(data.playlist))
        return (<div>loading ...</div>)

    const { name, id, description, tags, tracks, trackCount, coverImgUrl, shareCount, commentCount, creator, playCount } = data.playlist


    return (

        <div>
            <div className="flex mt-5">
                <img className="w-48 h-48 mr-5" src={coverImgUrl} alt="" />
                <div className="h-48 flex flex-col itmes-around justify-around">
                    <p><span className="text-sm border border-red-600 text-red-600 px-1 py-0.5 rounded mr-2">歌单</span>
                        <span className="text-xl">{name}</span></p>
                    <div className="flex items-center">
                        <img className="w-8 h-8 rounded-2xl mr-3" src={creator.avatarUrl} alt="" />
                        <p className="text-gray-400 text-sm">{creator.nickname}</p>
                    </div>
                    <p className="text-gray-500 text-sm">歌曲数:{trackCount}</p>
                    <p className="text-sm">标签： {tags.map(item => <span className="text-gray-500 mr-2 text-sm">{item}</span>)}</p>
                    <p>播放数：{playCount}</p>
                    <p className="text-sm">
                        <span className="mr-4">分享 {shareCount}</span>
                        <span>评论 {commentCount}</span>
                    </p>
                    <p className="text-gray-600 text-sm">简介: {description}</p>
                </div>
            </div>
            {
                tracks.map((item, index) => (
                    <div key={item.id} className={`${index % 2 === 0 && 'bg-gray-100'} flex justify-between w-full`}>
                        <span>{item.name}</span>
                        <span className="mr-2 text-gray-600">{item.ar.map(item => item.name)}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Rank

