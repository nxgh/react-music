import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useSelector, useDispatch } from 'react-redux'

import { getPlayList, changeEnterLoading } from '../../store/PlayList/action'

import Header from '../../components/UI/Header'
import Scroll from '../../components/UI/Scroll'

import { getCount, isEmptyObject } from '../../api/utils'
import { ReactComponent as CommentsSVG } from '../../assets/svg/comments.svg'
import { ReactComponent as LikeSVG } from '../../assets/svg/like.svg'
import { ReactComponent as CollectSVG } from '../../assets/svg/collect.svg'
import { ReactComponent as ShareSVG } from '../../assets/svg/share.svg'
import { ReactComponent as PlaySVG } from '../../assets/svg/play.svg'

import { Container, Menu, TopDesc, SongList, SongItem } from './style'

const PlayList = (props) => {
  const [showStatus, setShowStatus] = useState(true)
  const { currentPlayList, enterLoading } = useSelector((state) => ({
    currentPlayList: state.playlist.currentPlayList,
    enterLoading: state.playlist.enterLoading,
  }))
  const dispatch = useDispatch()
  const id = props.match.params.id
  useEffect(() => {
    dispatch(changeEnterLoading(true))
    dispatch(getPlayList(id))
  }, [id])

  const handleBack = () => {
    setShowStatus(false)
  }

  const MenuComponent = () => {
    return (
      <Menu>
        <div>
          <CommentsSVG className='iconfont' />
          评论
        </div>
        <div>
          <LikeSVG className='iconfont' />
          点赞
        </div>
        <div>
          <CollectSVG className='iconfont' />
          收藏
        </div>
        <div>
          <ShareSVG className='iconfont' />
          分享
        </div>
      </Menu>
    )
  }
  const TopDescComponent = () => {
    return (
      <TopDesc background={currentPlayList.coverImgUrl}>
        <div className='background'>
          <div className='filter'></div>
        </div>
        <div className='img_wrapper'>
          <div className='decorate'></div>
          <img src={currentPlayList.coverImgUrl} alt='' />
          <div className='play_count'>
            <i className='iconfont play'>&#xe885;</i>
            <span className='count'>
              {Math.floor(currentPlayList.subscribedCount / 1000) / 10} 万{' '}
            </span>
          </div>
        </div>
        <div className='desc_wrapper'>
          <div className='title'>{currentPlayList.name}</div>
          <div className='person'>
            <div className='avatar'>
              <img src={currentPlayList.creator.avatarUrl} alt='' />
            </div>
            <div className='name'>{currentPlayList.creator.nickname}</div>
          </div>
        </div>
      </TopDesc>
    )
  }
  const getName = (list) => {
    let str = ''
    list.map((item, index) => {
      str += index === 0 ? item.name : '/' + item.name
      return item
    })
    return str
  }
  const SongListComponent = () => {
    return (
      <SongList>
        <div className='first_line'>
          <div className='play_all'>
            <PlaySVG className="iconfont" />
            <span>
              {' '}
              播放全部{' '}
              <span className='sum'>
                (共 {currentPlayList.tracks.length} 首)
              </span>
            </span>
          </div>
          <div className='add_list'>
            <CollectSVG className='iconfont' />
            <span> 收藏 ({getCount(currentPlayList.subscribedCount)})</span>
          </div>
        </div>
        <SongItem>
          {currentPlayList.tracks.map((item, index) => {
            return (
              <li key={index}>
                <span className='index'>{index + 1}</span>
                <div className='info'>
                  <span>{item.name}</span>
                  <span>
                    {getName(item.ar)} - {item.al.name}
                  </span>
                </div>
              </li>
            )
          })}
        </SongItem>
      </SongList>
    )
  }
  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames='fly'
      appear={true}
      unmountOnExit
      // TODO: 这里使用了 HashRouter
      onExited={props.history.goBack}>
      <Container>
        <Header title={currentPlayList.name} handleClick={handleBack}></Header>
        {!isEmptyObject(currentPlayList) ? (
          <Scroll bounceTop={false}>
            <div>
              <TopDescComponent />
              <MenuComponent />
              <SongListComponent />
            </div>
          </Scroll>
        ) : null}
      </Container>
    </CSSTransition>
  )
}

export default PlayList
