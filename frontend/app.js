document.addEventListener("DOMContentLoaded", function() {
    const root = document.getElementById("root");

    const Header = () => {
        return `
            <header>
                <h1>Fabric Frontend</h1>
            </header>
        `;
    };

    const Footer = () => {
        return `
            <footer>
                <p>&copy; 2023 Fabric</p>
            </footer>
        `;
    };

    const App = () => {
        return `
            ${Header()}
            <div class="container">
                <h1>Welcome to Fabric Frontend</h1>
                <p>This is a simple frontend for the Fabric application.</p>
            </div>
            ${Footer()}
        `;
    };

    root.innerHTML = App();
});
