import { Router, Route, Switch,Redirect } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import { createBrowserHistory } from 'history'
//手动自己的创建history对象
const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from="/" to="/login"></Redirect>
        <Route path="/login" component={Login}></Route>
        <Route path="/home" component={Home}></Route>
      </Switch>
    </Router>
  )
}

export default App
