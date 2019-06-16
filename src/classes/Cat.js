import { pickBody, pickGenes, pickSex, pickName } from '../services/propertyPickers';
import replaceCatFeatures from '../services/replaceCatFeatures';
import getPhenotype from '../services/getPhenotype'
import uniqid from 'uniqid';

class Cat {
    constructor(mother, father) {
        this.id = uniqid();
        this.male = pickSex();
        this.name = pickName();
        this.body = pickBody();
        this.genes = this.generateGenes(mother.genes, father.genes);
        this.bodyText = this.generateBodyText(this.genes, this.body);
    }

    generateGenes(motherGenes, fatherGenes) {
        return {
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

    changeName(newName) {
        this.name = newName;
    }
}

export default Cat;