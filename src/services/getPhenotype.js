import { geneData, combinations } from '../catData/genes';

function getPhenotype(geneMakeup, geneType) {
    const gene0 = geneData[geneType][geneMakeup[0]];
    const gene1 = geneData[geneType][geneMakeup[1]];
    if (gene0.dominant && !gene1.dominant) {
        return gene0.basePhenotype;
    } else if (gene1.dominant && !gene0.dominant) {
        return gene1.basePhenotype;
    } else {
        return getCombination(gene0, gene1, combinations[geneType]);
    }
}

function getCombination(gene0, gene1, combinationList) {
    return combinationList[`${gene0}${gene1}`] || combinationList[`${gene1}${gene0}`];
}

export default getPhenotype;