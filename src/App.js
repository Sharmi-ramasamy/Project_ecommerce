
import './App.css';
import Header from './Common/Header/Header';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import { Pages } from './Pages/Pages';
import Home from './Components/Mainpage/Home';

function App() {
  return (
    <>
         {/* <Login/> <br/>  */}
         {/* <Signup/> */}
         <Router>
           <Header/>
            <Switch>
            {/* <Route path='/' element={<Home/>}/> */}
 
            <Route path='/' exact>
              <Pages/>
            </Route> 

                      <Pages/>
            </Switch>
         </Router>
    </>
  );
}

export default App;
