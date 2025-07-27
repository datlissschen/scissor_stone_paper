import React from 'react';
import Greeting from './components/Greeting';

const App: React.FC = () => {
    return (
        <main>
            <h1>Hello from App Component</h1>
            <Greeting name={"Max"}/>
        </main>
    );
};

export default App;
