import getPhenotype from '../services/getPhenotype';
import { geneData } from '../catData/genes';

// we want to make sure that all combinations of phenotypes are valid

function getListOfPhenotypes(geneType) {
    const phenotypes = [];
    const genes = Object.keys(geneData[geneType]);
    for (let i = 0; i < genes.length; i++) {
        const primaryGene = genes[i];
        for (let j = i; j < genes.length; j++) {
            const secondaryGene = genes[j];
            console.log(`testing for ${primaryGene}${secondaryGene} in ${geneType}`);
            const phenotype = getPhenotype([primaryGene, secondaryGene], geneType);
        }
    }
    return phenotypes;
}

test('all whisker gene combinations have a phenotype', () => {
    const phenotypes = getListOfPhenotypes('whiskers');
    phenotypes.forEach(phenotype => {
        expect(phenotype.left).toBeTruthy();
        expect(phenotype.right).toBeTruthy();
    })
})

test('all eye gene combinations have a phenotype', () => {
    const phenotypes = getListOfPhenotypes('eyes');
    phenotypes.forEach(phenotype => {
        expect(phenotype.left).toBeTruthy();
        expect(phenotype.right).toBeTruthy();
    })
})

test('all nose gene combinations have a phenotype', () => {
    const phenotypes = getListOfPhenotypes('nose');
    phenotypes.forEach(phenotype => {
        expect(phenotype.center).toBeTruthy();
    })
})