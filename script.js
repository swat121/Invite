function navigate(pageNumber) {
    document.getElementById('page1').style.display = pageNumber === 1 ? 'block' : 'none';
    document.getElementById('page2').style.display = pageNumber === 2 ? 'block' : 'none';
}

function showText() {
    const text = "Привет, это твое приглашение на тусовку посвященную Halloween! Если ты готов нажимай на кнопку";
    const textContainer = document.getElementById("invitation-text");
    const button = document.getElementById("accept-invitation-button");
    const touchButton = document.getElementById("touch-button");

    // Показываем контейнер текста
    textContainer.style.display = 'block';

    // Очищаем текущий текст в контейнере
    touchButton.style.display = 'none';
    let i = 0;
    const interval = setInterval(() => {
        // Добавляем по одной букве
        document.getElementById("invitation-content").textContent += text.charAt(i);
        i++;

        // Останавливаем интервал, когда все буквы отображены
        if (i === text.length) {
            clearInterval(interval);
            button.style.display = 'block';
        }
    }, 100); // Интервал между буквами в миллисекундах
}
