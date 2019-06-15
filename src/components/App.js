import React from 'react';
import cats from '../catData/catArt';
import CatBox from './CatBox';

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
                    <CatBox cat={cat} />
                ))
            }
        </div>
    )
}

export default App;