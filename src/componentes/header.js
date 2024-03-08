export const header =  {
    template: //html
    `
    <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand text-light">Gestion de incidencias FPLLEFIA</a>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cosmo/bootstrap.min.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
      <div>
        <button class="btn btn-secondary" id='botonPanel'>PANEL</button>
        <button class="btn btn-secondary" id='botonLogin'>LOGIN</button>
        <button class="btn btn-secondary" id='botonRegistre'>REGISTRO</button>
        <button class="btn btn-secondary" id='botonCerrarSesion'>Cerrar sesión</button>
      </div>
    </div>
  </nav>
    `,
    script: () => {
      document.addEventListener("DOMContentLoaded", function () {
        const currentPath = window.location.pathname;
  
        const menuOptionsDiv = document.getElementById("menuOptions");
  
        if (currentPath.includes("registro") || currentPath.includes("login")) {
          // Página de registro o inicio de sesión
          menuOptionsDiv.innerHTML = `
            <button class="btn btn ms-2" id='botonRegistro'>Registro</button>
            <button class="btn btn ms-2" id='botonLogin'>Login</button>
          `;
        } else {
          // Otras páginas
          menuOptionsDiv.innerHTML = `
            <button class="btn btn ms-2" id='botonPanel'>PANEL</button>
            <button class="btn btn ms-2" id='botonLogin'>LOGIN</button>
            <button class="btn btn ms-2" id='botonRegistre'>REGISTRO</button>
            <button class="btn btn ms-2" id='botonCerrarSesion'>Cerrar sesión</button>
          `;
        }
  
        // Lógica para cerrar sesión
        const botonCerrarSesion = document.getElementById("botonCerrarSesion");
        if (botonCerrarSesion) {
          botonCerrarSesion.addEventListener("click", function () {
            // Aquí debes implementar la lógica para cerrar sesión
            console.log("Cerrar sesión");
            // Puedes redirigir a la página de inicio de sesión u otra acción necesaria
          });
        }
      });
    },
  };