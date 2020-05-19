import React from 'react'
import { List, ListItem } from '../../../components/UI/Horizen/style'
import Horizen from '../../../components/UI/Horizen'

export default (props) => {
  const { title, recommendList } = props
  return (
    <Horizen title={title} recommendList={recommendList}>
      <List>
        {recommendList.map((item) => {
          return (
            <ListItem key={item.id}>
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
