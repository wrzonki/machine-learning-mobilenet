const classifier = ml5.imageClassifier('MobileNet', function () {
    console.log('Model Loaded!');
});

window.prediction = () => {
    const image = document.querySelector('.box-body img');
    const result = document.getElementById('result');
    const probability = document.getElementById('probability');
    classifier.predict(image, function (err, results) {
        result.innerText = results[0].className;
        probability.innerText = results[0].probability.toFixed(4);
    });
}