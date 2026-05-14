export function loadHeader() {

    const currentPage = window.location.pathname.split("/").pop();

    return `
    <nav class="navbar navbar-expand-lg navbar-dark shadow-sm">
        <div class="container">

            <a class="navbar-brand d-flex align-items-center" href="index.html">
                <img src="img/logo.png" alt="Logo Econciencia"
                    width="40" height="40" class="me-2">
                Econciencia
            </a>

            <button class="navbar-toggler" type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup">

                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto">

                    <a class="nav-link ${currentPage === 'index.html' ? 'active' : ''}"
                        href="index.html">
                        Inicio
                    </a>

                    <a class="nav-link ${currentPage === 'contaminacion.html' ? 'active' : ''}"
                        href="contaminacion.html">
                        Contaminación
                    </a>

                    <a class="nav-link ${currentPage === 'cambioclimatico.html' ? 'active' : ''}"
                        href="cambioclimatico.html">
                        Cambio climático
                    </a>

                </div>
            </div>

        </div>
    </nav>
    `;
}