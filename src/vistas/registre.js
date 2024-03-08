import { usuaris } from "../bd/usuaris";

export const registre = {
  //html

  template: `
        <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
            <main>
                <div class="container">
                    <h1 class="mt-5 text-center">Registro</h1>
                    <div class="m-5 mx-auto" style="max-width: 400px">
                    <form action="" class="form border shadow-sm p-3">
                        <label for="nombre" class="form-label">Nombre:</label>
                        <input id="nombre" type="text" class="form-control" />
                        <label for="apellidos" class="form-label">Apellidos:</label>
                        <input id="apellidos" type="text" class="form-control" />
                        <label for="email" class="form-label">Email:</label>
                        <input id="email" type="text" class="form-control" />
                        <label for="pass" class="form-label mt-3">Contraseña:</label>
                        <input id="pass" type="password" class="form-control" />
                        <button id="enviarRegistro" class="btn btn-primary w-100 mt-3" type="button">Enviar</button>
                </form>
                    </div>
                </div>
            </main>
            <footer class="">
                <nav class="navbar bg-secondary fixed-bottom small">
                    <div class="container">
                        <a class="navbar-brand" href="http://www.fpllefia.com">
                            <img
                                src=".images/logo.svg"
                                alt="fpllefia"
                                width="30"
                                height="24"
                                class="d-inline-block align-text-top"
                            />
                            FPLlefià
                        </a>
                        <span class="navbar-text">@Texto de header</span>
                        <a href="#" class="nav-link">Vínculo header</a>
                    </div>
                </nav>
            </footer>
    
            <!-- Option 1: Bootstrap Bundle with Popper -->
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                crossorigin="anonymous"
            ></script>
        </body>
    </html>    
`,
  script: () => {
    document.getElementById("enviarRegistro").addEventListener("click", function () {
        // Obtener valores del formulario
        const nombre = document.getElementById("nombre").value;
        const apellidos = document.getElementById("apellidos").value;
        const email = document.getElementById("email").value;
        const contraseña = document.getElementById("pass").value;
    
        // Validar que los campos no estén vacíos
        if (nombre && apellidos && email && contraseña) {
            // Crear nuevo usuario
            const nuevoUsuario = {
                nombre,
                apellidos,
                email,
                contraseña,
            };
    
            // Agregar usuario a la base de datos
            usuarios.push(nuevoUsuario);
    
            // Guardar base de datos actualizada en localStorage
            guardarUsuarios();
    
            // Limpiar campos del formulario
            document.getElementById("nombre").value = "";
            document.getElementById("apellidos").value = "";
            document.getElementById("email").value = "";
            document.getElementById("pass").value = "";
    
            // Notificar al usuario que se registró correctamente (puedes personalizar esto según tus necesidades)
            alert("Registro exitoso. ¡Bienvenido!");
        } else {
            // Notificar al usuario que debe completar todos los campos
            alert("Por favor, complete todos los campos.");
        }
    });
  },
};
