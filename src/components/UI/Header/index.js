import React, { useRef, useEffect } from 'react'

import styled from 'styled-components'
import {globalStyle as style} from '../../../assets/global-style'
import { ReactComponent as BackSVG } from '../../../assets/svg/back.svg'
import PropTypes from 'prop-types'
const HeaderContainer = styled.div`
  position: fixed;
  padding: 5px 10px;
  padding-top: 0;
  height: 40px;
  width: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  line-height: 40px;
  background: ${style['theme-color']};
  color: ${style['font-color-light']};
  .back {
    margin-right: 5px;
    font-size: 20px;
    width: 20px;
  }
`
const Content = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 32px;
  .title {
    font-size: ${style['font-size-l']};
    font-weight: 700;
    color: #fff;
  }
`

const Marquee = (props) => {
  const txt = useRef()
  const outer = useRef()
  useEffect(() => {
    const outerWidth = outer.current.offsetWidth
    const txtWidth = txt.current.offsetWidth
    let w = outerWidth
    const inter = setInterval(() => {
      w = w + txtWidth === 0 ? outerWidth : w - 1
      txt.current.style.transform = `translate(${w}px)`
    }, 10)
    return () => {
      clearInterval(inter)
    }
  }, [])
  return (
    <Content ref={outer}>
      <div className="title" ref={txt}>{props.data}</div>
    </Content>
  )
}
const Header = React.forwardRef((props, ref) => {
  const { handleClick, title } = props
  return (
    <HeaderContainer ref={ref} onClick={handleClick}>
      <BackSVG className='iconfont back' />
      {/* <h1>{title}</h1> */}
      <Marquee data={title} />
    </HeaderContainer>
  )
})

Header.defaultProps = {
  handleClick: () => {},
  title: '标题',
}

Header.propTypes = {
  handleClick: PropTypes.func,
  title: PropTypes.string,
}

export default React.memo(Header)
