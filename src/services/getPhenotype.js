import { geneData, combinations } from '../catData/genes';

function getPhenotype([gene1Name, gene2Name], geneType) {
    const firstGeneData = geneData[geneType][gene1Name];
    const secondGeneData = geneData[geneType][gene2Name];
    if (firstGeneData === secondGeneData) {
        return firstGeneData.basePhenotype;
    } else if (firstGeneData.dominant && !secondGeneData.dominant) {
        return firstGeneData.basePhenotype;
    } else if (secondGeneData.dominant && !firstGeneData.dominant) {
        return secondGeneData.basePhenotype;
    } else {
        return getCombination(gene1Name, gene2Name, combinations[geneType]);
    }
}

function getCombination(gene1Name, gene2Name, combinationList) {
    return combinationList[`${gene1Name}${gene2Name}`] || combinationList[`${gene2Name}${gene1Name}`];
}

export default getPhenotype;