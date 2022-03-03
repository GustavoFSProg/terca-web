import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Regsiter from './Register'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/register" component={Regsiter} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
