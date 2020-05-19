import React, { memo, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import Scroll from '../Scroll'

import { List, ListItem, Container } from './style'

function Horizen(props) {
  const Category = useRef(null)

  const { recommendList, title } = props

  useEffect(() => {
    if (recommendList.length) {
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
          {props.children}
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
