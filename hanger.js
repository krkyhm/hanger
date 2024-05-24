let selectedOptions = { pipeThickness: null, hangerType: null };
const prices = {
    '15A-기본타입': 10000,
    '15A-네모타입': 15000,
    '15A-2층타입': 20000,
    '15A-2단타입': 25000,
    '20A-기본타입': 11000,
    '20A-네모타입': 16000,
    '20A-2층타입': 21000,
    '20A-2단타입': 26000,
    '25A-기본타입': 12000,
    '25A-네모타입': 17000,
    '25A-2층타입': 22000,
    '25A-2단타입': 27000
};

function selectOption(option, value) {
    selectedOptions[option] = value;
    document.querySelectorAll(`#${option}List .option-block`).forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.classList.add('selected');
    calculatePrice();
}

function calculatePrice() {
    if (selectedOptions.pipeThickness && selectedOptions.hangerType) {
        const key = `${selectedOptions.pipeThickness}-${selectedOptions.hangerType}`;
        const price = prices[key];
        document.getElementById('finalPrice').textContent = price.toLocaleString() + '원';
        document.getElementById('priceDisplay').style.display = 'block';
    } else {
        document.getElementById('priceDisplay').style.display = 'none';
    }
}
