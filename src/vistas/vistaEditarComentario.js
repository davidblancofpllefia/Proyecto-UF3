
export const vistaEditarComentarios =  {
  template: //html
  `
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
`
}