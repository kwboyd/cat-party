import React from 'react';
import cats from '../art/catArt';
import Cat from './Cat';

const App = () => {
    return (
        <div>
            {
                cats.map(cat => (
                    <Cat catBody={cat}></Cat>
                ))
            }
        </div>
    )
}

export default App;