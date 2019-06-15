import React from 'react';
import { geneData } from '../catData/genes';

const GeneMakeup = ({cat}) => {

    const isDominant = (type, gene) => {
        return geneData[type][gene].dominant;
    }

    return (
        <div>
            <div>
                <p>彡</p>
                {
                    cat.genes.whiskers.map(gene => (
                        <p className={isDominant('whiskers', gene) ? 'dominant' : ''}>{gene}</p>
                    ))
                }
            </div>
            <div>
                <p>👀</p>
                {
                    cat.genes.eyes.map(gene => (
                        <p className={isDominant('eyes', gene) ? 'dominant' : ''}>{gene}</p>
                    ))
                }
            </div>
            <div>
                <p>👃</p>
                {
                    cat.genes.nose.map(gene => (
                        <p className={isDominant('nose', gene) ? 'dominant' : ''}>{gene}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default GeneMakeup;