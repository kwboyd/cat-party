import React, { useState } from 'react';
import CatBox from './CatBox';
import generateRandomCat from '../services/randomCatGenerator';

const App = () => {
    const [catList, setCatList] = useState(() => generateStartingCats());

    function generateStartingCats() {
        const numberOfCats = 3;
        const list = [];
        for (let i = 0; i < numberOfCats; i++) {
            list.push(generateRandomCat());
        }
        return list;
    }

    const generateNewCat = () => {
        const newCat = generateRandomCat();
        setCatList([...catList, newCat])
    }

    return (
        <div>
            {
                catList.map(cat => (
                    <CatBox cat={cat} key={cat.id}/>
                ))
            }
            <div>
                <button onClick={() => generateNewCat()}>Generate Random Cat</button>
            </div>
        </div>
    )
}

export default App;