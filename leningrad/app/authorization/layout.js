export default function AuthorizationLayout({ children }) {
    return (
        <div>
            <header>Авторизация</header>
            <main>{children}</main>
        </div>
    );
}