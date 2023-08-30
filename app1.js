document.addEventListener('DOMContentLoaded', function() {
    const radarButton = document.getElementById('radarButton');
    const resultContainer = document.getElementById('resultContainer');
    const resultElement = document.getElementById('result');
    const circleContainer = document.getElementById('circleContainer');

    const targetNumber = 4.07; // Задайте желаемое целевое число здесь

    radarButton.addEventListener('click', function() {
        resultElement.textContent = '0.00';
        resultContainer.style.display = 'block';
        circleContainer.innerHTML = '';

        simulateRadarSearch(targetNumber);
    });

    function simulateRadarSearch(targetNumber) {
        let currentNumber = 0;
        const interval = setInterval(function() {
            resultElement.textContent = currentNumber.toFixed(2);
            currentNumber += 0.1;

            if (currentNumber > targetNumber) {
                clearInterval(interval);
                resultElement.textContent = targetNumber.toFixed(2);
                circleContainer.innerHTML = '';
            } else {
                createCircle();
            }
        }, 100);
    }

    function createCircle() {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.left = radarButton.offsetLeft + radarButton.offsetWidth / 2 + 'px';
        circle.style.top = radarButton.offsetTop + radarButton.offsetHeight / 2 + 'px';
        circleContainer.appendChild(circle);
    }
});
