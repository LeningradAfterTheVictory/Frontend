export default function AuthenticationPage() {
    return (
        <div>
            <h1>Вход в систему</h1>
            <form>
                <label>Имя пользователя</label>
                <input type="text" />
                <label>Пароль</label>
                <input type="password" />
                <button type="submit">Войти</button>
            </form>
        </div>
    );
}