import React from 'react';
import UserProfile from "./UserProfile";
import EmergencyCard from "../User/EmergencyCard";
//import Forms from "./Forms";
//import Team from "./Team";
import { Switch, Route, Link } from 'react-router-dom';


const User = () =>{

    return (
        <>
        <Switch>
            <Route exact path="/user">
                <div>
                    <img src="../../public/avatar-placeholder.png" alt="placeholder" />
                    <h1>Welcome "UserName"</h1>
                </div>
                <div>
                Missing stuff......
                </div>
            </Route>
            <Route path="/user/profile">
                <h1>Profile</h1>
                <UserProfile />
            </Route>
            <Route path="/user/forms">
                <h1>Forms</h1>
                {/* <Forms /> */}
                <Link to="/user">Go Back</Link>
            </Route>
            <Route path="/user/team">
                <h1>Team</h1>
                {/* <Team /> */}
                <Link to="/user">Go Back</Link>
            </Route>
        </Switch>
            
            
        </>
    );
}

export default User;