import React, { memo, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import Scroll from '../Scroll'

import { List, ListItem, Container } from './style'

function Horizen(props) {
  const Category = useRef(null)

  const { recommendList, title } = props
  console.log('Horizen recommendList', recommendList)

  useEffect(() => {
    if (recommendList.length) {
      console.log('Horizen useEffect')

      let categoryDOM = Category.current
      let tagElems = categoryDOM.querySelectorAll('span')

      let totalWidth = 0
      Array.from(tagElems).forEach((ele) => {
        totalWidth += ele.offsetWidth
      })
      categoryDOM.style.width = `${totalWidth}px`
    }
  }, [recommendList.length])

  return (
    <Container>
      <h2>{title}</h2>
      <Scroll direction={'horizental'}>
        <div ref={Category} className='wtf'>
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
        </div>
      </Scroll>
    </Container>
  )
}
// Horizen.defaultProps = {
//   recommendList: [],
// }

// Horizen.propTypes = {
//   recommendList: PropTypes.array,
// }

export default memo(Horizen)
