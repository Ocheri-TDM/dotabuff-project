const Error = () => {
    return(
        <div class="error">
            <div class="conatainer">
                <h3 class="error-title">404 Not Found</h3>
                <p class="error-discription">Отсутствует подключение к сети. В другом случае сайт находится в режиме профилактики</p>
                <button class="reload">Обновить страницу</button>
            </div>
        </div>
    );
}
export default Error;