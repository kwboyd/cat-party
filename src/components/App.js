import React from 'react';
import cats from '../catData/catBodies';
import CatBox from './CatBox';

const mockCats = [
    {
        body: cats[0],
        genes: {
            whiskers: ['>', '>'],
            eyes: ['o', '-'],
            nose: ['u', '^']
        }
    },
    {
        body: cats[1],
        genes: {
            whiskers: ['~', '~'],
            eyes: ['@', '-'],
            nose: ['u', 'u']
        }
    },
    {
        body: cats[2],
        genes: {
            whiskers: ['=', '~'],
            eyes: ['-', '-'],
            nose: ['v', 'u']
        }
    },
    {
        body: cats[3],
        genes: {
            whiskers: ['=', '>'],
            eyes: ['@', '@'],
            nose: ['v', 'u']
        }
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