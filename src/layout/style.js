import styled from 'styled-components'

export const TabNav = styled.div`
  display: flex;
  justify-content: space-around;
  height: 2.5rem;
  
  background: #000;  // DELETE:
  align-items: center;

  &.selected {
    span {
      padding: 3px 0;
      font-weight: 700;
      color: #f1f1f1;
      border-bottom: 2px solid #f1f1f1;
    }
`

export const Nav = styled.div`
    a {
        margin: 0 0.9375rem;
    }
`
