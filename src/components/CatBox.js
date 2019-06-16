import React, { useState } from 'react';
import './CatBox.scss';
import CatBody from './CatBody';
import GeneMakeup from './GeneMakeup';

const CatBox = ({ cat, catIsSelected, toggleSelectedToBreed, disableBreeding }) => {
    const [showGenes, setShowGenes] = useState(false);

    const toggleShowGenes = () => {
        setShowGenes(!showGenes);
    }

    return (
        <div className={`cat-box ${catIsSelected ? 'selected-cat' : ''}`}>
            <CatBody bodyText={cat.bodyText}></CatBody>
            <p className="cat-info">{cat.name} ({cat.male ? 'M' : 'F'})</p>
            {
                showGenes && (
                    <GeneMakeup cat={cat}></GeneMakeup>
                )
            }
            <button onClick={toggleShowGenes}>{showGenes ? 'Hide Genes' : 'Show Genes'}</button>
            <button className="breed-button" disabled={disableBreeding} onClick={() => toggleSelectedToBreed(cat)}>
                { catIsSelected ? 'Deselect' : 'Breed' }
            </button>
        </div>
    )
}

export default CatBox;