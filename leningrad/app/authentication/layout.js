export default function AuthenticationLayout({ children }) {
    return (
        <div>
            <header>Аутентификация</header>
            <main>{children}</main>
        </div>
    );
}