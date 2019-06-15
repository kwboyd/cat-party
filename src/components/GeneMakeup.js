import React from 'react';
import { geneData } from '../catData/genes';

const typesOfGenes = [
    {
        display: '彡',
        name: 'whiskers'
    },
    {
        display: '👀',
        name: 'eyes'
    },
    {
        display: '👃',
        name: 'nose'
    }
]

const GeneMakeup = ({cat}) => {

    const isDominant = (type, gene) => {
        return geneData[type][gene].dominant;
    }

    return (
        <div>
            {
                typesOfGenes.map(type => (
                    <div>
                        <p>{type.display}</p>
                        {
                            cat.genes[type].map(gene => (
                                <p className={isDominant(type, gene) ? 'dominant' : ''}>{gene}</p>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default GeneMakeup;