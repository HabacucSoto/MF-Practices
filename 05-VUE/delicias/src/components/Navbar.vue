<template>
    <nav class="navbar navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand text-white fw-bold" href="index.html"
                id='logo'>Delicias</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link text-white" href="/">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="/personalizado">Personalizado</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="/admin">Administrador</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
nav {
    background-color: #512DA8
}
#logo {
    font-family: 'Kaushan Script', cursive; 
    font-size: 1.5rem;
}
</style>