import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
// import Layout from './Components/Layout';
// Route
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Global from './Pages/Global';
import Messages from './Pages/Messages';
import Facetime from './Pages/Facetime';
import Welcome from './Pages/Welcome';
import Login from './Pages/Login';
import About from './Pages/Aboutme';
import Premium from './Pages/Premium';
import Payment from './Pages/Payment';
import Matches from './Pages/Matches';
import Support from './Pages/Support';
import Policy from './Pages/Policy';
import Profile from './Pages/Profile'



function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        {/* <Layout> */}
          <Routes>
            <Route path="/" element= {<Welcome/>} />
            <Route path="/Aboutme" element= {<About/>} />
            <Route path="/Login" element= {<Login/>} />
            <Route path="/Home" element= {<Home/>} />
            <Route path="/Global" element= {<Global/>} />
            <Route path="/Messages" element= {<Messages/>} />
            <Route path="/Facetime" element= {<Facetime/>} />
            <Route path="/Premium" element= {<Premium/>} />
            <Route path="/Payment" element= {<Payment/>} />
            <Route path="/Matches" element= {<Matches/>} />
            <Route path="/Support" element= {<Support/>} />
            <Route path="/Policy" element= {<Policy/>} />
            <Route path="/Profile" element= {<Profile/>} />

          </Routes>
        {/* </Layout> */}
      </Router>

    </React.Fragment>
  );
}

export default App;
