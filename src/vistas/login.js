export const login = {
  //html
  template: `
    <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
        <main>
            <div class="container">
                <h1 class="mt-5 text-center">Inicia sesión</h1>
                <div class="m-5 mx-auto" style="max-width: 400px">
                    <form action="" class="form border shadow-sm p-3">
                        <label for="email" class="form-label">Email:</label>
                        <input type="text" class="form-control" />
                        <label for="pass" class="form-label mt-3">Contraseña:</label>
                        <input id="pass" type="password" class="form-control" />
                        <div class="form-check mt-3">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                                checked
                            />
                            <label class="form-check-label" for="flexCheckChecked">
                                Recordar sesión
                            </label>
                        </div>
                        <a class="d-block text-end" href="#">¿Has olvidado tu contraseña?</a>
                        <a class="btn btn-primary w-100 mt-3" href="#">Iniciar sesión</a>
                    </form>
                    <a class="d-block mt-5 btn btn-secondary mx-auto" href="#"
                        >¿Eres nuevo? Regístrate</a
                    >
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
    document.addEventListener("DOMContentLoaded", function () {
      // Obtener referencias a los elementos del formulario y al mensaje de error
      var formularioLogin = document.getElementById("formularioLogin");
      var inputUsername = document.getElementById("username");
      var inputPassword = document.getElementById("password");
      var mensajeError = document.getElementById("mensajeError");
  
      // Agregar un evento de escucha al formulario para el envío
      formularioLogin.addEventListener("submit", function (event) {
        // Evitar que se envíe el formulario por defecto
        event.preventDefault();
  
        // Obtener los valores del nombre de usuario y la contraseña
        var username = inputUsername.value;
        var password = inputPassword.value;
  
        // Validar si el nombre de usuario y la contraseña son correctos
        var usuarioEncontrado = usuarios.find(user => user.email === username && user.contraseña === password);
  
        if (usuarioEncontrado) {
          // Iniciar sesión con éxito, puedes redirigir o realizar otras acciones
          console.log("Inicio de sesión exitoso");
          mensajeError.textContent = ""; // Limpiar cualquier mensaje de error existente
          // Simulamos redirección después del inicio de sesión (puedes ajustar esto)
          window.location.href = '/panel'; 
        } else {
          // Mostrar un mensaje de error
          mensajeError.textContent = "Nombre de usuario o contraseña incorrectos";
        }
      });
    });
  },
};
