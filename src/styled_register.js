import styled from 'styled-components'

export const ContainerApp = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;

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
  background: #d9d9d9;
  height: auto;
  width: 22rem;
  margin-bottom: 15px;
  margin-top: 15px;
  border-radius: 1rem;

  @media screen and (max-width: 1000px) {
    width: 17rem;
  }
`
export const Span = styled.span`
  color: darkcyan;
  font-display: 18px;
  margin-top: 1rem;
`
export const ListWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  width: 16rem;
  height: 2rem;
  border: 1px solid darkcyan;
  border-radius: 10px;
`
export const Button = styled.button`
  width: 75%;
  height: 33px;
  background: #009999;
  border: 0;
  border-radius: 15px;
  color: white;
  font-family: 'Hubballi';
  font-size: 20px;
  cursor: pointer;
  transition: ease 0.7s;

  :hover {
    background: red;
  }
`
