import './index.css'
import { useHistory } from 'react-router-dom'
export default function Login() {
    const history = useHistory()
    function handleClick(){
        history.push('/home')
    }
  return <div className="login" onClick={handleClick}>Start App</div>
}
