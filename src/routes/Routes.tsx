import { Route, Switch, BrowserRouter } from "react-router-dom";
import Authentication from "pages/Authentication/index";

import { Home } from "pages/Home";
import { PrivateRoute } from "data/services/PrivateRoute";




export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Authentication} />

                <PrivateRoute
                    path="/home"
                    component={Home}
                />
            </Switch>
        </BrowserRouter>
    );
};


/* export const PrivateRoute = ({ ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated() === true ? (
                    <Component {...props} />
                ) : (
                    console.log(isAuthenticated()),
                    <Redirect
                        to={{ pathname: "/", state: { from: props.location } }}
                    />
                )
            }
        />
    );
};
*/
