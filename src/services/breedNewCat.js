import { pickBody, pickGenes, pickSex } from './propertyPickers';
import replaceCatFeatures from './replaceCatFeatures';
import getPhenotype from './getPhenotype'

class Cat {
    constructor(mother, father) {
        this.male = pickSex();
        this.body = pickBody();
        this.genes = generateGenes(mother.genes, father.genes);
        this.bodyText = generateBodyText(this.genes, this.body);
    }

    generateGenes(motherGenes, fatherGenes) {
        this.genes = {
            whiskers: pickGenes(motherGenes.whiskers, fatherGenes.whiskers),
            eyes: pickGenes(motherGenes.eyes, fatherGenes.eyes),
            nose: pickGenes(motherGenes.nose, fatherGenes.nose)
        }
    }

    generateBodyText(genes, body) {
        const whiskers = getPhenotype(genes.whiskers, 'whiskers');
        const eyes = getPhenotype(genes.eyes, 'eyes');
        const nose = getPhenotype(genes.nose, 'nose');
        const bodyText = replaceCatFeatures({body, whiskers, eyes, nose});
        return bodyText;
    }
}

export default Cat;