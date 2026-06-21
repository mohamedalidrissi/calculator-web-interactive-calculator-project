let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value.replace(/%/g, '/100');
        let result = eval(expression);

        if (result === undefined || isNaN(result)) {
            display.value = 'خطأ';
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = 'خطأ';
    }
}

// السماح باستخدام لوحة المفاتيح
document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (/[0-9.+\-*/%]/.test(key)) {
        appendValue(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});