import React from 'react'
import { withRouter } from 'react-router-dom'
import { List, ListItem } from '../../../components/UI/Horizen/style'
import Horizen from '../../../components/UI/Horizen'

const SongList = (props) => {
  const { title, recommendList } = props
  const enterDetail = (id) => props.history.push(`/recommend/${id}`)

  return (
    <Horizen title={title} recommendList={recommendList}>
      <List>
        {recommendList.map((item) => {
          return (
            <ListItem key={item.id} onClick={() => enterDetail(item.id)}>
              <div className='list-item-wrap'>
                <img src={item.picUrl + '?param=100x100'} alt='music' />
                <div className='desc'>{item.name}</div>
              </div>
            </ListItem>
          )
        })}
      </List>
    </Horizen>
  )
}

export default React.memo(withRouter(SongList))
