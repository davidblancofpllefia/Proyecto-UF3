import { tickets } from "../bd/tickets"

export const panel =  {
    template: //html
    ` 
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Panel</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cosmo/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
    </head>
    <body>
      <main class="container mt-5">
        <h1>Administración de incidencias</h1>
        <h2 class="mt-5">Tickets pendientes</h2>
        <table class="table mt-4">
          <thead>
            <tr>
              <th>Código</th>
              <th>Fecha</th>
              <th>Aula</th>
              <th>Grupo</th>
              <th>Ordenador</th>
              <th>Descripción</th>
              <th>Alumno</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>123459</td>
              <td>18/04/2023</td>
              <td>T6</td>
              <td>DAW1</td>
              <td>PC3</td>
              <td>Error de impresora</td>
              <td>Ana Martínez</td>
              <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
              <td><button class="btn btn-warning" title="Añadir comentario" ><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
              </button>
              </td>
              <td><button class="btn btn-info botonComentario"  title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
              </button></td>
              <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
              </i>
              </button></td>
    
            </tr>
            <tr>
              <td>123460</td>
              <td>19/04/2023</td>
              <td>T8</td>
              <td>DAW2</td>
              <td>PC4</td>
              <td>Problema de acceso a archivos</td>
              <td>Pedro Gómez</td>
              <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
              <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
              </button>
              </td>
              <td><button class="btn btn-info botonComentario" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
              </button></td>
              <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
              </i>
              </button></td>
    
            </tr>
            <tr>
              <td>123461</td>
              <td>20/04/2023</td>
              <td>T6</td>
              <td>DAW1</td>
              <td>PC1</td>
              <td>Aplicación se cierra inesperadamente</td>
              <td>Sofía Fernández</td>
              <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
              <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
              </button>
              </td>
              <td><button class="btn btn-info botonComentario" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
              </button></td>
              <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
              </i>
              </button></td>
    
            </tr>
            <tr>
              <td>123462</td>
              <td>21/04/2023</td>
              <td>T7</td>
              <td>DAW2</td>
              <td>PC2</td>
              <td>Problema de conexión a la red</td>
              <td>Luis Torres</td>
              <td><button class="btn btn-success " title="Resolver ticket">Resolver</button></td>
              <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
              </button>
              </td>
              <td><button class="btn btn-info botonComentario" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
              </button></td>
              <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
              </i>
              </button></td>
    
            </tr>
            <tr>
              <td>123463</td>
              <td>22/04/2023</td>
              <td>T8</td>
              <td>DAW1</td>
              <td>PC3</td>
              <td>Archivos corruptos</td>
              <td>Carolina Ramírez</td>
              <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
              <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
              </button>
              </td>
              <td><button class="btn btn-info botonComentario" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
              </button></td>
              <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
              </i>
              </button></td>
    
            </tr>
          </tbody>
        </table>
        <h2 class="mt-5">Tickets resueltos</h2>
        <table class="table mt-4">
          <thead>
            <tr>
              <th>Código</th>
              <th>Fecha</th>
              <th>Fecha resuelto</th>
              <th>Aula</th>
              <th>Grupo</th>
              <th>Ordenador</th>
              <th>Descripción</th>
              <th>Alumno</th>
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td>123457</td>
              <td>16/04/2023</td>
              <td>15/05/2023</td>
              <td>T7</td>
              <td>DAW2</td>
              <td>PC1</td>
              <td>Problema de conexión a Internet</td>
              <td>Maria López</td>
              
              <td><button class="btn btn-info botonComentario" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
              </button></td>
              <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
              </i>
              </button></td>
            </tr>
            <tr>
              <td>123458</td>
              <td>17/04/2023</td>
              <td>15/05/2023</td>
              <td>T8</td>
              <td>DAW1</td>
              <td>PC2</td>
              <td>Pantalla en blanco</td>
              <td>Juan Rodríguez</td>
              <td><button class="btn btn-info botonComentario" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
              </button></td>
              <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
              </i>
              </button></td>
            </tr>
            <tr>
              <td>123459</td>
              <td>18/04/2023</td>
              <td>15/05/2023</td>
              <td>T8</td>
              <td>DAW1</td>
              <td>PC3</td>
              <td>Error de impresora</td>
              <td>Ana Martínez</td>
              <td><button class="btn btn-info botonComentario" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
              </button></td>
              <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
              </i>
              </button></td>
            </tr>
           
           
          </tbody>
        </table>
      </main>
      
    
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Observaciones</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Código incidencia: <span>123546</span></p>
            <label for="comentario" class="form-label">Comentario:</label> 
            <input class="form-control">Estee es un comentario sobre esta incidencia</input>
            <p class="small text-end">Autor: <span>Pepe Loco</span></p>
          </div>
          <div class="modal-footer">
    
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary">Guardar cambios</button>
          </div>
        </div>
      </div>
    </div>
      </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>
`,

script: ()=>{
  const eventBody = document.querySelector('body')
    function ticketsResueltos() {

      const resueltos = tickets.filter(ticket => ticket.estado === 'resuelto');
    

      const filas = resueltos.map(ticket => `
        <tr>
          <td>${ticket.codigo}</td>
          <td>${ticket.estado}</td>
          <td>${ticket.descripcion}</td>
          <td>${ticket.alumno}</td>
          <!-- Otros campos del ticket según sea necesario -->
        </tr>
      `);
    
      document.getElementById('tablaResueltos').innerHTML = filas.join('');
    

      const pendientes = tickets.filter(ticket => ticket.estado === 'pendiente');
    

      const filasPendientes = pendientes.map(ticket => `
        <tr>
          <td>${ticket.codigo}</td>
          <td>${ticket.estado}</td>
          <td>${ticket.descripcion}</td>
          <td>${ticket.alumno}</td>
          <!-- Otros campos del ticket según sea necesario -->
        </tr>
      `);
    

      document.getElementById('tablaPendientes').innerHTML = filasPendientes.join('');
    }
    function ticketsPendientes() {

      const pendientes = tickets.filter(ticket => ticket.estado === 'pendiente');

      const filas = pendientes.map(ticket => `
        <tr>
          <td>${ticket.codigo}</td>
        </tr>
      `);
  
      document.getElementById('tablaPendientes').innerHTML = filas.join('');
    }
    
    function ticketsResueltos() {

      const resueltos = tickets.filter(ticket => ticket.estado === 'resuelto');
    
      const filas = resueltos.map(ticket => `
        <tr>
          <td>${ticket.codigo}</td>
        </tr>
      `);
    
      document.getElementById('tablaResueltos').innerHTML = filas.join('');
    }
  
    ticketsPendientes();
    ticketsResueltos();
    
 

}
}