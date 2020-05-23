import styled from 'styled-components'
import { globalStyle as style } from '../../../assets/global-style'

export const List = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  color: #fff;
`
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
    color: ${style['font-color-desc-light']};
  }
`
export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0.3125rem;
  overflow: hidden;
  h2 {
    margin: 0.625rem 0 0.3125rem 0.625rem;
    font-size: 1.05rem;
  }
`
