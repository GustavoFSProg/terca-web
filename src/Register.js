import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import api from './services/api'
import { Button, Input, ContainerApp, ListContainer } from './styled_register'

function Regsiter() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  async function handleRegister(e) {
    e.preventDefault()
    const data = { name, email, password }
    await api.post('/register', data)

    history.push('/')

    return alert('Usuario Cadastrado!')
  }

  return (
    <ContainerApp>
      <br />
      <br />
      <br />

      <Link
        style={{
          textDecoration: 'none',
          fontSize: '1.7rem',
          fontFamily: 'Hubballi',
        }}
        to="/"
      >
        Home
      </Link>
      <br />

      <ListContainer>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '18px',
            marginBottom: '24px',
          }}
          onSubmit={handleRegister}
        >
          <br />
          <span style={{ marginBottom: '10px' }}>Nome: </span>
          <Input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          <br />
          <br />
          <span style={{ marginBottom: '10px' }}>Email: </span>

          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <span style={{ marginBottom: '10px' }}>Senha: </span>

          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Button type="submit">Cadastrar</Button>
        </form>
      </ListContainer>
    </ContainerApp>
  )
}

export default Regsiter
