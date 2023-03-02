import React from 'react';
import SplashScreen from './components/SplashScreen';
import ProvideImage from './components/ProvideImage';
import NavBar from './components/NavBar';

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <SplashScreen animationDelay={2000} />
            <main>
                <h1>WasteWise</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit ex fugiat, esse obcaecati magni nemo eligendi similique. Recusandae enim odio cumque vero quo quisquam beatae rerum velit, obcaecati minima.</p>
                <p>Molestiae ipsa velit eligendi dicta ea nemo minus, magni accusamus odit possimus esse iusto cumque laboriosam omnis rerum optio, tempora doloremque incidunt aspernatur deleniti! Optio dolor unde quae iste obcaecati!</p>
                <p>Quas quam animi esse mollitia ipsum in. Eius aspernatur voluptates, cumque quis neque amet tempora nemo in obcaecati id sequi non laudantium nesciunt fuga aperiam dicta voluptatibus autem blanditiis quos.</p>
                <ProvideImage />
            </main>
      </div>
    );
}
  
export default App;