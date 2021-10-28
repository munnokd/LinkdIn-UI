import './App.css';
import SignIn from './components/SignIn';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import {getUserAuth} from './actions'
import { connect } from 'react-redux';

function App(props) {
  
  useEffect(()=>{
    props.getUserAuth();
  }, [])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" >
            <SignIn/>
          </Route>
          <Route exact path="/home">
            <Navbar/>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps=(state)=>{
  return{};
}
const mapDispatchToProps=(dispatch)=>({
  getUserAuth:()=>dispatch(getUserAuth()),
})

export default connect(mapStateToProps,mapDispatchToProps)(App)

