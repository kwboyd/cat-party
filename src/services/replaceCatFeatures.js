import featureMap from '../art/featureMap';

function replaceCatFeatures({body, eyes, whiskers, nose}) {
    let newBody = body;
    newBody = newBody.replace(featureMap.leftEye, eyes.left);
    newBody = newBody.replace(featureMap.rightEye, eyes.right);
    newBody = newBody.replace(featureMap.leftWhisker, whiskers.left);
    newBody = newBody.replace(featureMap.rightWhisker, whiskers.right);
    newBody = newBody.replace(featureMap.nose, nose);
    return newBody;
}

export default replaceCatFeatures;