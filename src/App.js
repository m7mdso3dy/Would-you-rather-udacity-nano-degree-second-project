
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AddQuestion from './pages/AddQuestion';
import Home from './pages/Home';
import LeaderBored from './pages/LeaderBored';
import QuestionDetail from './pages/QuestionDetail';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import { Nav, NavItem } from 'react-bootstrap';

function App() {
  const authedUser = useSelector(state => state.authedUser.authedUser);
  return (
    <div className = 'container  py-5'>
      {
        authedUser &&
        <Nav className="justify-content-center py-5" activeKey="/home">
          <NavItem>
            <Nav.Link as={Link} to='/home'> Home</Nav.Link>
          </NavItem>
          <NavItem eventkey={1} href="/add">
                  <Nav.Link as={Link} to="/add" >Add New Question</Nav.Link>
          </NavItem>
          <NavItem eventkey={2} href="/leaderBored">
                  <Nav.Link as={Link} to="/leaderBored" >Leader Bored</Nav.Link>
          </NavItem>   
        </Nav>
      }
      
      
      <Routes>
        
        <Route path='/' element={
          (authedUser && <Navigate to='/home'></Navigate>) ||
          (!authedUser &&  <Navigate to='/login'></Navigate>)
          
        }></Route>
        <Route path='/home' element={
          (authedUser && <Home></Home>) ||
          (!authedUser &&  <Navigate to='/login'></Navigate>)
        } ></Route>
        <Route path='/add' element={
          (authedUser && <AddQuestion></AddQuestion>) ||
          (!authedUser &&  <Navigate to='/login'></Navigate>)
        } ></Route>
        <Route path='/question/:questionId' element={
          (authedUser && <QuestionDetail></QuestionDetail>) ||
          (!authedUser &&  <Navigate to='/login'></Navigate>)
        } ></Route>
        <Route path='/leaderBored' element={
          (authedUser && <LeaderBored></LeaderBored>) ||
          (!authedUser &&  <Navigate to='/login'></Navigate>)
        } ></Route>
          
          <Route path='/login' element={
            (!authedUser &&
            <Login></Login>)||<Navigate to='/home'></Navigate>
          }>
          </Route>
      </Routes>
        
    </div>
    
  )
}

export default App;
