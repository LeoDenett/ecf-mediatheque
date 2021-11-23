import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
//Style
import './styles/app.css'
import './styles/GlobalStyle.scss';
//Pages
import Accueil from './pages/Accueil';
import Info from "./pages/Info";
import Contact from "./pages/Contact";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/accueil" component={Accueil}/>
                <Route exact path="/info" component={Info}/>
                <Route exact path="/contact" component={Contact}/>
                <Redirect from="/*" to="/accueil"/>
            </Switch>
            <Footer/>
        </Router>
    );
}

ReactDOM.render(<Router><App/></Router>, document.getElementById("root"));