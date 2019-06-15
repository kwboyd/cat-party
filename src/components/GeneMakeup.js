import React from 'react';
import GeneMap from '../catData/geneMap';

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
        return GeneMap[type][gene].dominant;
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