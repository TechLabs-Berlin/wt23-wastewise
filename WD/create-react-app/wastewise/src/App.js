import React from 'react';
import Header from './components/Header';
import IFrame from './components/IFrame';
import NavBar from './components/NavBar';
import SplashScreen from './components/SplashScreen';
import TakePicture from './components/TakePicture';

const App = () => {
    return (
        <div className="App">
            <SplashScreen animationDelay={3000} />

            <NavBar />
            <Header title={'Scan waste'} />
            <TakePicture />

            {/* <NavBar />
            <Header title={'Analytics'} />
            <IFrame /> */}

        </div>
    );
}

export default App;