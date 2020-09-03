import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../utils/history';
import OptionBar from '../components/options-bar/OptionsBar';
import AuthRoute from './auth-route/AuthRoute';

import Home from '../containers/home/Home';
import About from '../containers/about/About';
import HouseOfFame from '../containers/house-of-fame/HouseOfFame';
import TermsAndConditions from '../containers/terms-and-conditions/TermsAndConditions';
import FourOFour from '../containers/404/404';
//user
import Register from '../containers/register/Register';
import Login from '../containers/login/Login';
import Logout from '../containers/logout/Logout';
import Profile from '../containers/profile/Profile';
//game
import Game from '../containers/game/Game';
import Progress from '../containers/game/progress/Progress'; // TODO
import Shop from '../containers/game/shop/Shop';
import Inventory from '../containers/game/inventory/Inventory';
import Character from '../containers/game/character/Character';
import Games from 'containers/games/Games'; // TODO
//puzzles
import Puzzles from 'containers/puzzles/Puzzles' // TODO
//memes
import Social from '../containers/social/Social';
import AddMeme from '../containers/social/add-meme/AddMeme';
import ViewMeme from '../containers/social/view-meme/ViewMeme';
import EditMeme from '../containers/social/edit-meme/EditMeme';
import DeleteMeme from '../containers/social/delete-meme/DeleteMeme';

export default function AppRouter() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/terms-and-conditions" exact component={TermsAndConditions} />
                <Route path="/house-of-fame" exact component={HouseOfFame} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <AuthRoute path="/logout" exact component={Logout} />
                <AuthRoute path="/profile" exact component={Profile} />
                <Route
                    path="/game"
                    render={({ match: { url } }) => (
                        <div className="main-container">
                            <OptionBar />
                            <AuthRoute path={`${url}/`} exact component={Game} />
                            <AuthRoute path={`${url}/progress`} exact component={Progress} />
                            <AuthRoute path={`${url}/shop`} exact component={Shop} />
                            <AuthRoute path={`${url}/inventory`} exact component={Inventory} />
                            <AuthRoute path={`${url}/character`} exact component={Character} />
                        </div>
                    )}
                />
                <Route path="/games" exact component={Games} />
                <Route path="/puzzles" exact component={Puzzles} />
                <Route
                    path="/social"
                    render={({ match: { url } }) => (
                        <React.Fragment>
                            <AuthRoute path={`${url}/`} exact component={Social} />
                            <AuthRoute path={`${url}/add-meme`} exact component={AddMeme} />
                            <AuthRoute path={`${url}/view-meme/:id`} exact component={ViewMeme} />
                            <AuthRoute path={`${url}/edit-meme/:id`} exact component={EditMeme} />
                            <AuthRoute path={`${url}/delete-meme/:id`} exact component={DeleteMeme} />
                        </React.Fragment>
                    )}
                />
                <Route path="*" component={FourOFour} />
            </Switch>
        </Router>
    );
};