btn = document.querySelector("#btn-convert");
firstInput = document.querySelector("#first-num");
secondInput = document.querySelector("#second-num");

let exchangeRates = {};
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        exchangeRates = data.rates;
        console.log(exchangeRates);
    })
    .catch((error) => {
        console.error("Error fetching the exchange rates:", error);
    });

btn.addEventListener("click", (e) => {
    firstCurValue = document.querySelector("#first-cur").value;
    secondCurValue = document.querySelector("#second-cur").value;

    secondInput.value = convertCurrency(enteredМvalue, firstCurValue, secondCurValue).toFixed(3);
});

let enteredМvalue;
firstInput.addEventListener("input", (e) => {
    enteredМvalue = +e.target.value;
});

const apiKey = "d510b2563f7d48cda31a63216d4b4960";
const url = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;

function convertCurrency(amount, fromCurrency, toCurrency) {
    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];
    return (amount / fromRate) * toRate;
}
