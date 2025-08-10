import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Users from "./pages/users";
import Login from "./pages/login";
import Main from "./pages/main";
import NavBar from "./components/navBar";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?" component={Users} />
                <Route path="/login" component={Login} />
                <Route path="/" exact component={Main} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}
export default App;
