import { Redirect, Route } from "react-router-dom";
import { useToken } from "data/hooks/useToken";


export const PrivateRoute = ({ component: Component, ...rest }) => {
    const {token} = useToken();

    return (
        <Route {...rest} render={props => (
            token ? (
                <Component {...props} />
            ) : (
                <Redirect to={{
                    pathname: "/",
                    state: { from: props.location }
                }} />
            )
        )} />


    );
};
