import {Route, Switch, BrowserRouter} from "react-router-dom";
import Authentication from "pages/Authentication/index";
import { Home } from "pages/Home";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Authentication} />
                <Route path="/home" exact component={Home} />
            </Switch>
        </BrowserRouter>
    );
}
