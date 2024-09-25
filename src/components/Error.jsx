function Error () {
    return (
        <div class="error">
        <div class="container">
            <h3 class="error-title">Произошла Ошибка</h3>
            <p class="error-description">Проверьте подключение к интернету. Возможно сервер отключился или временно не работает.</p>
            <button class="white-btn">Обновить</button>
        </div>
    </div>
    );
}

export default Error;