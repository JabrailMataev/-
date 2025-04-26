// Массив с названиями стран (ограниченный список)
const countries = [
    "Россия", "США", "Китай", "Германия", "Франция",
    "Великобритания", "Япония", "Италия", "Испания", "Канада",
    "Бразилия", "Индия", "Австралия", "Мексика", "Южная Корея"
];

const countryInput = document.getElementById('country-input');
const suggestionsList = document.getElementById('suggestions-list');

// Обработчик ввода текста
countryInput.addEventListener('input', function() {
    const inputText = this.value.toLowerCase();
    suggestionsList.innerHTML = '';
    
    if (inputText.length === 0) {
        suggestionsList.style.display = 'none';
        return;
    }

    // Фильтрация стран по введенному тексту
    const filteredCountries = countries.filter(country => 
        country.toLowerCase().includes(inputText)
    ).slice(0, 10); // Ограничиваем до 10 подсказок

    if (filteredCountries.length > 0) {
        filteredCountries.forEach(country => {
            const li = document.createElement('li');
            li.textContent = country;
            li.addEventListener('click', function() {
                countryInput.value = country;
                suggestionsList.style.display = 'none';
            });
            suggestionsList.appendChild(li);
        });
        suggestionsList.style.display = 'block';
    } else {
        suggestionsList.style.display = 'none';
    }
});

// Скрываем список при клике вне поля ввода
document.addEventListener('click', function(e) {
    if (e.target !== countryInput) {
        suggestionsList.style.display = 'none';
    }
});