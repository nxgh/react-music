import React from 'react'
import styled from 'styled-components'
import { globalStyle as style } from '../../../assets/global-style'

import { List } from '../../../components/UI/Horizen/style'
import Horizen from '../../../components/UI/Horizen'

export const ListItem = styled.span`
  flex: 0 0 auto;
  font-size: 16px;
  padding: 5px 8px;
  width: 100px;
  height: 150px;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 0.1875rem;
  }
  .desc {
    font-size: 0.75rem;
    color: ${style['font-color-desc']};
  }
`

export default (props) => {
  const { title, recommendDJList } = props
  console.log('recommendDJList', recommendDJList)

  return (
    <Horizen title={title} recommendList={recommendDJList}>
      <List>
        {recommendDJList.map((item) => {
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
