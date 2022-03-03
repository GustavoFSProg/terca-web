import styled from 'styled-components'

export const ContainerApp = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  margin-left: 58px;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
`

export const ListContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: lightgray;
  height: auto;
  width: 22rem;
  margin-bottom: 15px;
  border-radius: 1rem;

  @media screen and (max-width: 1000px) {
    width: 17rem;
  }
`
export const Span = styled.span`
  color: darkcyan;
  font-size: 16px;
  margin-top: 1.2rem;
`
export const ListWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin-bottom: 40px;
  margin-top: 27px;

  @media screen and (max-width: 800px) {
    margin-bottom: 20px;
    margin-top: -10px;
  }
`
