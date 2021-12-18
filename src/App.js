
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AddQuestion from './pages/AddQuestion';
import Home from './pages/Home';
import LeaderBored from './pages/LeaderBored';
import QuestionDetail from './pages/QuestionDetail';

function App() {
  return (
    <div className = 'container py-5'>
      
      <Routes>
        <Route path='/' element={<Navigate to = '/home'></Navigate>}></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/add' element={<AddQuestion></AddQuestion>} ></Route>
        <Route path='/question/:questionId' element={<QuestionDetail></QuestionDetail>} ></Route>
        <Route path='/leaderBored' element={<LeaderBored></LeaderBored>} ></Route>
      </Routes>
    </div>
    
  )
}

export default App;
