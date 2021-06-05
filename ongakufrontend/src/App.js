import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Importing Container 
import Home from './containers/Home';
import ArtistPage from './containers/Artist';
import Songs from './containers/Songs';
import Albums from './containers/Albums';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import Newlyadded from './containers/Newlyadded';
import Layout from './hocs/Layout';
import ArtistSongs from './containers/ArtistSongs';

// // Artist Import 
// import ArjitSingh from './components/artist/ArjitSingh';
// import Arrahaman from './components/artist/Arrahaman';
// import Edsheeran from './components/artist/Edsheeran';
// import Justintimberlake from './components/artist/Justintimberlake';
// import Latamangeshkar from './components/artist/Latamangeshkar';
// import Shreyaghoshal from './components/artist/Shreyaghoshal';
// import Sonunigam from './components/artist/Sonunigam';


import { Provider } from 'react-redux';
import store from './store';

const App = () =>(
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/artistpage' component={ArtistPage}/>
                    {/* <Route exact path='/arjit' component={ArjitSingh}/> */}
                    <Route exact path='/newlyadded' component={Newlyadded}/>
                    <Route exact path='/songs' component={Songs}/>
                    <Route exact path='/albums' component={Albums}/>
                    <Route exact path='/signup' component={Signup}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/artists/:artist' component={ArtistSongs}/>
                    <Route exact path='/activate/:uid/:token' component={Activate}/>
                    <Route exact path='/reset-password' component={ResetPassword}/>
                    <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm}/>
                </Switch>
            </Layout>
        </Router>
    </Provider>
);

export default App;