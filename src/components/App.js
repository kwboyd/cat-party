import React, { useState } from 'react';
import CatBox from './CatBox';
import Rules from './Rules';
import generateRandomCat from '../services/randomCatGenerator';
import Cat from '../classes/Cat';
import './App.scss';

const App = () => {
    const [catList, setCatList] = useState(() => generateStartingCats());
    const [catToBreed, setCatToBreed] = useState(null);

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

    const toggleSelectedToBreed = (cat) => {
        if (!catToBreed) {
            setCatToBreed(cat);
        } else if (catToBreed === cat) {
            setCatToBreed(null);
        } else {
            breedCats(cat, catToBreed);
        }
    }

    const breedCats = (cat1, cat2) => {
        const newCat = new Cat(cat1, cat2);
        setCatList([...catList, newCat]);
        setCatToBreed(null);
    }

    const disableBreeding = (cat) => {
        if (!catToBreed) {
            return false;
        } else if (catToBreed === cat) {
            return false;
        } else if (catToBreed.male === cat.male) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div>
            <Rules />
            <div className="cat-grid">
                {
                    catList.map(cat => (
                        <CatBox
                            cat={cat}
                            key={cat.id}
                            catIsSelected={catToBreed === cat}
                            disableBreeding={disableBreeding(cat)}
                            toggleSelectedToBreed={toggleSelectedToBreed}
                        />
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