import styled from 'styled-components'

export const Content = styled.div`
  position: fixed;
  top: 3.125rem;
  bottom: 0;
  width: 100%;
`

export const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 15px 0;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #525252;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    background: #525252;
  }
  .iconfont {
    width: 1.5625rem;
    height: 1.5625rem;
  }
`
