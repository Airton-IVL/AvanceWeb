const modoToggle = document.getElementById("modoToggle");
const header = document.getElementById("header");
const enlaces = document.querySelectorAll(".navbar a");
const secciones = document.querySelectorAll("section[id]");

// Cambiar entre modo oscuro y modo claro
modoToggle.addEventListener("click", function(){
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        modoToggle.textContent = "Modo oscuro";
    }else{
        modoToggle.textContent = "Modo claro";
    }
});

// Funcion del boton comprar
function comprar(){
    alert("Producto agregado al carrito");
}

// Scroll suave
enlaces.forEach(function(enlace){
    enlace.addEventListener("click", function(e){
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){
            destino.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Cambiar header al bajar y marcar enlace activo
window.addEventListener("scroll", function(){
    if(window.scrollY > 60){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

    let actual = "";

    secciones.forEach(function(seccion){
        const top = seccion.offsetTop - 140;
        const alto = seccion.offsetHeight;

        if(window.scrollY >= top && window.scrollY < top + alto){
            actual = seccion.getAttribute("id");
        }
    });

    enlaces.forEach(function(enlace){
        enlace.classList.remove("activo");

        if(enlace.getAttribute("href") === "#" + actual){
            enlace.classList.add("activo");
        }
    });
});