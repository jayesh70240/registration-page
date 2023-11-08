import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';
import ViewProfile from './components/ViewProfile';
import EditProfile from './components/EditProfile';


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Registration/>} />
          <Route path="/viewprofile" element={<ViewProfile/>} />
          {/* <Route path="/" component={Login} /> Default to the login page */}
        
      </Routes> 
      <Link to ="/login">Login</Link>
      <br/><br/>
      <Link to ="/viewprofile">View Profile</Link>
    </Router> 
  );
}

export default App;