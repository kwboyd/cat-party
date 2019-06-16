import { geneData } from '../catData/genes';
import Cat from '../classes/Cat';

const allGenes = {
    whiskers: Object.keys(geneData.whiskers),
    eyes: Object.keys(geneData.eyes),
    nose: Object.keys(geneData.nose)
}

function generateRandomCat() {
    return new Cat({genes: allGenes}, {genes: allGenes})
}

export default generateRandomCat;