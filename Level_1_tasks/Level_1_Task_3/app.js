let celcius = document.getElementById('celcius');
let fareinheit = document.getElementById('fareinheit');
let kelvin = document.getElementById('kelvin');

celcius.oninput = () => {
    let output = parseFloat(celcius.value)*9/5+32;
    let output2 = parseFloat(celcius.value)+273.15;
    fareinheit.value = parseFloat(output.toFixed(4));
    kelvin.value = parseFloat(output2.toFixed(4));
};

fareinheit.oninput = () => {
    let output = (parseFloat(fareinheit.value)-32)*5/9;
    let output2 = ((parseFloat(fareinheit.value)-32)*5)/9+273.15;
    celcius.value = parseFloat(output.toFixed(4));
    kelvin.value = parseFloat(output2.toFixed(4));
};

kelvin.oninput = () => {
    let output = parseFloat(kelvin.value)-273.15;
    let output2 = 9/5*((parseFloat(kelvin.value)-273.15))+32;
    celcius.value = parseFloat(output.toFixed(4));
    fareinheit.value = parseFloat(output2.toFixed(4));
};

