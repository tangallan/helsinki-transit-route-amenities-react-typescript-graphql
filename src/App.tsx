import * as React from "react";
import "assets/scss/App.scss";

import { HashRouter, Switch, Route, IndexRoute } from 'react-router-dom';
import FrontDoorPage from "./views/FrontDoor/index";
import AmenitiesPage from "./views/Amenities/index";

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render(): JSX.Element {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="app-component">
                        <HashRouter>
                            <Switch>
                                <Route exact path="/" component={FrontDoorPage}/>
                                <Route path="/:location" component={AmenitiesPage}/>
                            </Switch>
                        </HashRouter>
                    </div>
                </div>
            </div>
        );
    }
}
