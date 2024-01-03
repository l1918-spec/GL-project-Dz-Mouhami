import "./App.css";
import React from 'react';
import {Route, Routes} from "react-router-dom";
import Landing from "./pages/landing.jsx";
import LogIn from "./pages/logIn.jsx";
import Sign from "./pages/Sign.jsx";
import LawyerProfile from "./pages/LawyerProfile.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import A from "./pages/Lawyers.jsx";

// lawyer pages
import Signlawyer from "./pages/signlawyer.jsx";
import LandingLawyer from "./pages/lawyer-pages/landing.jsx";
//import {Sign as SignInLawyer} from "./pages/lawyer-pages/Sign.jsx";
import Notifications from "./pages/lawyer-pages/Notifications.jsx";
import Ab from "./pages/lawyer-pages/Schedule.jsx";
import EditProfile from "./pages/lawyer-pages/EditProfile.jsx";
import Home from "./components/admin-components/Home.jsx";
import WaitingList from "./components/admin-components/WaitingList.jsx";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
      
      </div>
      
      <Routes>
            <Route path="/" >
                <Route index element={<Landing/>}/>
                <Route path="logIn" element={<LogIn/>}/>
                <Route path="SignUp" element={<Sign/>}/>
                <Route path="Lawyer-profile" element={<LawyerProfile/>}/>
                <Route path="About-Us" element={<AboutUs/>}/>
                <Route path="lawyers" element={<A/>}/>
                <Route path="lawyer">
                    <Route index element={<LandingLawyer/>}/>
                    <Route path="logIn" element={<LogIn/>}/>
                    <Route path="SignUp" element={<Signlawyer/>}/>
                    <Route path="Notifications" element={<Notifications/>}/>
                    <Route path="Scheduler" element={<Ab/>}/>
                    <Route path="edit-profile" element={<EditProfile/>}/>
                </Route>
                <Route path="admin">
                    <Route index element={<Home/>}/>
                    <Route path="waiting-list" element={<WaitingList/>}/>
                </Route>
                {/*<Route path="*" element={<NoMatch />} /> */}
                {/* do this when having a 404 page*/}
            </Route>

        </Routes>
    </div>
  );
}

export default App;
