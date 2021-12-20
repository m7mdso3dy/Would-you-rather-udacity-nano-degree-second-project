
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AddQuestion from './pages/AddQuestion';
import Home from './pages/Home';
import LeaderBored from './pages/LeaderBored';
import QuestionDetail from './pages/QuestionDetail';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import { Nav, Navbar,Container } from 'react-bootstrap';
import UserStatus from './comps/Users Comps/UserStatus';
import { Fragment } from 'react';

function App() {
  const authedUser = useSelector(state => state.authedUser.authedUser);
  return (
    <Fragment>
      {
        authedUser &&
          <Navbar sticky="top" bg="light" expand="md" className='mb-5 py-4'>
            <Container>
              <Navbar.Brand href="#home">Would You Rather</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                  <Nav.Link as={Link} to='/home'> Home</Nav.Link>
                  <Nav.Link as={Link} to="/add" >Add New Question</Nav.Link>
                  <Nav.Link as={Link} to="/leaderboard" >Leader Bored</Nav.Link>
                </Nav>
                <UserStatus/>
              </Navbar.Collapse>
            </Container>
          </Navbar>      
      }
    <div className = 'container  py-5'>
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
        <Route path='/leaderboard' element={
          (authedUser && <LeaderBored></LeaderBored>) ||
          (!authedUser &&  <Navigate to='/login'></Navigate>)
        } ></Route>
          
          <Route path='/login' element={
            (!authedUser &&
            <Login></Login>)||<Navigate to='/home'></Navigate>
          }>
          </Route>
          <Route path='*' element={
            (!authedUser &&
            <Login></Login>)||<Navigate to='/home'></Navigate>
          }></Route>
      </Routes>
        
    </div>
  </Fragment>
  )
}

export default App;
