document.addEventListener('DOMContentLoaded', function () {
    const celsiusTab = document.getElementById('celsiusTab');
    const fahrenheitTab = document.getElementById('fahrenheitTab');
    const inputValue = document.getElementById('inputValue');
    const outputValue = document.getElementById('outputValue');
    const calculateButton = document.getElementById('calculateButton');
    const formulaDetail = document.getElementById('formulaDetail');

    let isCelsius = true;

    celsiusTab.addEventListener('click', function () {
        isCelsius = true;
        celsiusTab.classList.add('active');
        fahrenheitTab.classList.remove('active');
        formulaDetail.textContent = "°C to °F: (°C × 9/5) + 32";
        resetInputOutput();
    });

    fahrenheitTab.addEventListener('click', function () {
        isCelsius = false;
        fahrenheitTab.classList.add('active');
        celsiusTab.classList.remove('active');
        formulaDetail.textContent = "°F to °C: (°F − 32) × 5/9";
        resetInputOutput();
    });

    calculateButton.addEventListener('click', calculateTemperature);
    
    // Event listener for Enter key press
    inputValue.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            calculateTemperature();
        }
    });

    function calculateTemperature() {
        const input = parseFloat(inputValue.value);
        if (isNaN(input)) {
            outputValue.value = "Input tidak valid";
            return;
        }

        let result;
        if (isCelsius) {
            result = (input * 9/5) + 32;
        } else {
            result = (input - 32) * 5/9;
        }

        outputValue.value = result.toFixed(2);
    }

    function resetInputOutput() {
        inputValue.value = '';
        outputValue.value = '';
    }
});
