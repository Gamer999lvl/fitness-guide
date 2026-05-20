// script.js

// Проверяем, есть ли на странице калькулятор, прежде чем вешать событие
document.addEventListener('DOMContentLoaded', () => {
    const calcBtn = document.getElementById('calculate-btn');
    if (calcBtn) {
        calcBtn.addEventListener('click', calculateMacros);
    }
});

function calculateMacros() {
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('current-weight').value);
    const activity = parseFloat(document.getElementById('activity').value);
    const goal = document.getElementById('goal').value;

    if (!age || !height || !weight) {
        alert('Пожалуйста, заполните все поля!');
        return;
    }

    let bmr = gender === 'male' 
        ? 10 * weight + 6.25 * height - 5 * age + 5 
        : 10 * weight + 6.25 * height - 5 * age - 161;

    let tdee = bmr * activity;
    let calories = Math.round(tdee);
    let message = '';

    if (goal === 'loss') {
        calories = Math.round(tdee - 500);
        message = `<p style="color:#e74c3c;">Для похудения:</p>`;
    } else if (goal === 'gain') {
        calories = Math.round(tdee + 350);
        message = `<p style="color:#27ae60;">Для набора массы:</p>`;
    } else {
        message = `<p style="color:#3498db;">Поддержание веса:</p>`;
    }

    const protein = Math.round(weight * 2.0);
    const fat = Math.round((calories * 0.25) / 9);
    const carbs = Math.round((calories - protein*4 - fat*9) / 4);

    document.getElementById('result-message').innerHTML = message;
    document.getElementById('calories').textContent = calories;
    document.getElementById('protein').textContent = protein;
    document.getElementById('fat').textContent = fat;
    document.getElementById('carbs').textContent = carbs;
}

// Простая анимация загрузки страницы
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});