import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ContainerApp, ListContainer, ContainerTitle, Span, ListWrapper } from './styled_app'
import api from './services/api'

function App() {
  const [user, setUser] = useState([])

  async function getAll() {
    const { data } = await api.get('/')

    setUser(data)
  }

  useEffect(() => {
    getAll()
  }, [])

  return (
    <ContainerApp>
      <br />
      <br />
      <ContainerTitle>
        <Link style={{ textDecoration: 'none', fontFamily: 'Hubballi' }} to="/register">
          Cadastro
        </Link>
      </ContainerTitle>

      <br />

      {user.map((item) => {
        return (
          <ListContainer key={item.id}>
            <ListWrapper>
              <Span>
                <strong style={{ marginRight: '7px' }}>Nome: </strong> {item.name}
              </Span>

              <Span>
                <strong style={{ marginRight: '7px' }}>Email:</strong>
                {item.email}
              </Span>
              <br />
              <br />
              <br />
            </ListWrapper>
          </ListContainer>
        )
      })}
    </ContainerApp>
  )
}

export default App
