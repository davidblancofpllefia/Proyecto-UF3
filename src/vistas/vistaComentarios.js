export const Vistacomentarios =  {
    template: //html
`
  <main class="container mt-5">
    <div class="d-flex">
      <h1>Comentarios</h1><button class="btn btn-link ms-auto"> < Volver</button>
    </div>
    
    <h2 class="my-4">Código ticket: <span>123456</span></h2>
    <div class="">
      <form action="" class="form card p-3 shadow">
        <label for="comentario" class="form-label">Comentario: </label>
        <textarea class="form-control" col="3"></textarea>
        <label for="fecha" class="form-label me-2 mt-3">Fecha: </label>
        <div class="d-flex align-items-center">
          <input type="datetime-local" class="form-control w-25">
          <button class="btn btn-success ms-auto">Añadir comentario</button>
        </div>
      </form>

      <div class="mt-4">
        <div class="card p-3">
          <h5 class="text-end">Autor: <span>Javier Caraculo</span><span class="ms-4">12/10/2022</span></h5>
        <p>Este es un comentario Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit amet dignissimos laudantium blanditiis fuga recusandae sed culpa, earum pariatur repellat esse provident eaque totam quo sint iste, inventore deleniti quis.</p>
        </div>
        <div class="card p-3 mt-2">
          <h5 class="text-end">Autor: <span>Javier Caraculo</span><span class="ms-4">12/10/2022</span></h5>
        <p>Este es un comentario Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit amet dignissimos laudantium blanditiis fuga recusandae sed culpa, earum pariatur repellat esse provident eaque totam quo sint iste, inventore deleniti quis.</p>
        </div>
        <div class="card p-3 mt-2">
          <h5 class="text-end">Autor: <span>Javier Caraculo</span><span class="ms-4">12/10/2022</span></h5>
        <p>Este es un comentario Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit amet dignissimos laudantium blanditiis fuga recusandae sed culpa, earum pariatur repellat esse provident eaque totam quo sint iste, inventore deleniti quis.</p>
        </div>
        <div class="card p-3 mt-2">
          <h5 class="text-end">Autor: <span>Javier Caraculo</span><span class="ms-4">12/10/2022</span></h5>
        <p>Este es un comentario Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit amet dignissimos laudantium blanditiis fuga recusandae sed culpa, earum pariatur repellat esse provident eaque totam quo sint iste, inventore deleniti quis.</p>
        </div>
        
        
      </div>
    </div>
    
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
`


}