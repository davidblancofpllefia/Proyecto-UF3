// comentario.js
export const comentario = {
      
    template : //html
    `
        <div class="comentario">
          <p><strong>Nombre:</strong> <span id="nombre"></span></p>
          <p><strong>Fecha:</strong> <span id="fecha"></span></p>
          <p><strong>Comentario:</strong> <span id="contenido"></span></p>
        </div>
      `,
  
    script(nombre, fecha, comentario) {
      const div = document.createElement('div');
      div.innerHTML = this.template;
  
      // Inyecta los valores proporcionados en el comentario
      div.querySelector('#nombre').innerText = nombre;
      div.querySelector('#fecha').innerText = fecha;
      div.querySelector('#contenido').innerText = comentario;
  
      // Agrega el comentario al documento
      document.body.appendChild(div);
    }
}
  