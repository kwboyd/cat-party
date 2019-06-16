import React, { useState } from 'react';
import CatBox from './CatBox';
import Rules from './Rules';
import generateRandomCat from '../services/randomCatGenerator';
import './App.scss';

const App = () => {
    const [catList, setCatList] = useState(() => generateStartingCats());

    function generateStartingCats() {
        const list = [];
        const catStatus = {
            hasMale: false,
            hasFemale: false
        }
        while (!catStatus.hasMale || !catStatus.hasFemale) {
            const cat = createCatAndCheckSex(catStatus);
            list.push(cat);
        }
        return list;
    }

    function createCatAndCheckSex(catStatus) {
        const cat = generateRandomCat();
        if (cat.male) {
            catStatus.hasMale = true;
        } else {
            catStatus.hasFemale = true;
        }
        return cat;
    }

    const generateNewCat = () => {
        const newCat = generateRandomCat();
        setCatList([...catList, newCat])
    }

    return (
        <div>
            <Rules />
            <div className="cat-grid">
                {
                    catList.map(cat => (
                        <CatBox cat={cat} key={cat.id}/>
                    ))
                }
            </div>
            <div>
                <button className="generate-button" onClick={() => generateNewCat()}>Generate Random Cat</button>
            </div>
        </div>
    )
}

export default App;