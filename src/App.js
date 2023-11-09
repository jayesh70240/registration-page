// import './App.css';
// import Registration from './components/Registration';
// import Login from './components/Login';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';
// import ViewProfile from './components/ViewProfile';
// import EditProfile from './components/EditProfile';


// function App() {
//   return (
    
//     <Router>
//       <Routes>
//           <Route path="/login" element={<Login/>} />
//           <Route path="/" element={<Registration/>} />
//           <Route path="/viewprofile" element={<ViewProfile/>} />
//           <Route path="/editprofile/:id" element={<EditProfile/>} /> 
        
//       </Routes> 
//       <Link to ="/login">Login</Link>
//       <br/><br/>
//       <Link to ="/viewprofile">View Profile</Link>
//     </Router> 
//   );
// }

// export default App;

import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import ViewProfile from './components/ViewProfile';
import EditProfile from './components/EditProfile';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Registration</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/viewprofile">View Profile</Link>
            </li>
          </ul>
        </div>
      </nav>
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Registration />} />
        <Route path="/viewprofile" element={<ViewProfile />} />
        <Route path="/editprofile/:id" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
