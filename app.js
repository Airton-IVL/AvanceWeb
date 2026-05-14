// Funcion para mostrar/ocultar contraseña
function mostrarContrasena() {
    let pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}

// Funcion para ir a la tienda
function abrirPagina() {
    window.location.href = "tienda.html";
}