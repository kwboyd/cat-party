import React from 'react';
import cats from '../art/catArt';
import CatBody from './CatBody';

const mockCats = [
    {
        body: cats[0],
        whiskers: {
            left: '>>',
            right: '<<'
        },
        eyes: {
            left: 'o',
            right: '^'
        },
        nose: 'u'
    }
]

const App = () => {
    return (
        <div>
            {
                mockCats.map(cat => (
                    <CatBody cat={cat} />
                ))
            }
        </div>
    )
}

export default App;