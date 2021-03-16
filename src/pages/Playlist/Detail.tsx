import React, { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ArcDeTriomphe, Play } from '@icon-park/react'
import { isEmptyObj } from '../../utils/tools'
import usePlaylistDetail from '../../api/use-playlist-detail'
import Table, { IColumn } from '../../components/Table'
import dayjs from 'dayjs'
import usePlaylistComment from '../../api/use-playlist-comment'
import Comment from '../../components/Comments'

interface MTableProps {
  dataSource: object
  columns: any[]
}

const columns = [
  {
    title: '',
    key: 'start',
    width: '50px',
    render: () => <div>
      <Play theme="filled" size="22" fill="gray" strokeLinejoin="bevel" strokeLinecap="square" />
    </div>
  },
  {
    title: '音乐标题',
    key: 'name',
    width: '500px',
    render: (name: string) => <div>{name}</div>
  },
  {
    title: '歌手',
    key: 'author',
    // width: '300px',
    render: (name: string) => <div className="flex">{
      name.map(item => item.name).join(' / ')
    }</div>
  },
  {
    title: '时长',
    key: 'duration',
    // width: '300px',
    render: (name: string) => <div>{name}</div>
  },
  {
    title: '专辑',
    key: 'album',
    render: (name: string) => <div>{name.name}</div>
  }
]



const Rank = () => {
  const location = useLocation()

  const playlistId = location.pathname.split('/')[2]
  const { data } = usePlaylistDetail(playlistId)
  const { comments } = usePlaylistComment(playlistId)

  if (data?.code !== 200) {
    return <div>未找到歌单</div>
  }
  if (data?.playlist && isEmptyObj(data.playlist))
    return (<div>loading ...</div>)

  const { name, id, description, tags, tracks, trackCount, coverImgUrl, shareCount, commentCount, creator, playCount } = data.playlist



  const tableData = tracks.map(item => ({
    album: item.al,
    duration: dayjs(item.dt).format('mm:ss'),
    name: item.name,
    author: item.ar
  }))
  return (

    <div>
      <div className="flex mt-5">
        <img className="w-48 h-48 mr-5" src={coverImgUrl} alt="" />
        <div className="flex flex-col itmes-around justify-around">
          <p><span className="text-sm border border-red-600 text-red-600 px-1 py-0.5 rounded mr-2">歌单</span>
            <span className="text-xl">{name}</span></p>
          <div className="flex items-center mt-3 mb-1">
            <img className="w-8 h-8 rounded-2xl mr-3" src={creator.avatarUrl} alt="" />
            <p className="text-gray-400 text-sm">{creator.nickname}</p>
          </div>
          <p className="text-gray-500 text-sm my-1">歌曲数:{trackCount}</p>
          <span className="my-1 flex bg-red-500 w-20 justify-center items-center rounded-xl text-white text-sm p-1 hover:bg-red-600 cursor-pointer">播放全部</span>
          <p className="text-sm my-1">标签： {tags.map(item => <span className="text-gray-500 mr-2 text-sm">{item}</span>)}</p>
          <p className="text-sm my-1">
            <span>分享 {shareCount}</span>
            <span className="mx-5">评论 {commentCount}</span>
            <span>播放数：{playCount}</span>
          </p>
          <p className="text-gray-600 text-sm mt-1">简介: {description}</p>
        </div>
      </div>
      <Table columns={columns} data={tableData} ></Table>
      <Comment comments={comments}></Comment>
    </div>
  )
}

export default Rank

