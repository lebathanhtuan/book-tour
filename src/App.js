import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navibar from './components/navibar/Navibar';
import Footer from './components/Footer';
import routes from './routes';

class App extends Component {
    showContentRoutes = (routes) => {
        var result = null;
        if(routes.length > 0){
            result = routes.map((route, index) => {
                return(
                    <Route 
                        key={index}
                        path={route.path} 
                        exact={route.exact} 
                        component={route.main}
                    />
                )
            })
        }
        return result;
    }
    render() {
        return (
            <Router>
                <div>
                    {/* Navibar */}
                    <Navibar />
                    {/* Content */}
                    <Switch>
                        {this.showContentRoutes(routes)}
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
