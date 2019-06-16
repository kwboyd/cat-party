import { pickBody, pickGenes, pickSex, pickName } from '../services/propertyPickers';
import replaceCatFeatures from '../services/replaceCatFeatures';
import getPhenotype from '../services/getPhenotype'
import uniqid from 'uniqid';

class Cat {
    constructor(parent1, parent2) {
        this.id = uniqid();
        this.male = pickSex();
        this.name = pickName();
        this.pose = pickBody();
        this.genes = this.generateGenes(parent1.genes, parent2.genes);
        this.bodyText = this.generateBodyText(this.genes, this.pose);
    }

    generateGenes(parent1, parent2) {
        return {
            whiskers: pickGenes(parent1.whiskers, parent2.whiskers),
            eyes: pickGenes(parent1.eyes, parent2.eyes),
            nose: pickGenes(parent1.nose, parent2.nose)
        }
    }

    generateBodyText(genes, pose) {
        const whiskers = getPhenotype(genes.whiskers, 'whiskers');
        const eyes = getPhenotype(genes.eyes, 'eyes');
        const nose = getPhenotype(genes.nose, 'nose');
        const bodyText = replaceCatFeatures({pose, whiskers, eyes, nose});
        return bodyText;
    }

    changeName(newName) {
        this.name = newName;
    }
}

export default Cat;