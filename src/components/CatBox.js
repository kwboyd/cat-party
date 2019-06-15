import React, { useState } from 'react';
import './CatBox.scss';
import CatBody from './CatBody';
import replaceCatFeatures from '../services/replaceCatFeatures';

const CatBox = ({cat}) => {
    const [showGenes, setShowGenes] = useState(false);
    const catText = replaceCatFeatures(cat);

    const toggleShowGenes = () => {
        setShowGenes(!showGenes);
    }

    return (
        <div className="cat-box">
            <CatBody body={catText}></CatBody>
            {
                showGenes && (
                    <GeneMakeup cat={cat}></GeneMakeup>
                )
            }
            <button onClick={toggleShowGenes}>{showGenes ? 'Hide Genes' : 'Show Genes'}</button>
        </div>
    )
}

export default CatBox;