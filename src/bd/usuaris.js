
export const usuaris = [
    { nombre: 'Juan', apellido: 'Pérez', email: 'juan@example.com', contraseña: 'contraseña1' },
    { nombre: 'María', apellido: 'Gómez', email: 'maria@example.com', contraseña: 'contraseña2' },
    { nombre: 'Carlos', apellido: 'López', email: 'carlos@example.com', contraseña: 'contraseña3' },
    
  ];

  const guardarUsuarios = () => {
    try {
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      console.log('Base de datos de usuarios guardada en localStorage');
    } catch (error) {
      console.error('Error al guardar en localStorage:', error);
    }
  };

  const cargarUsuarios = () => {
    try {
      const usuariosGuardados = localStorage.getItem('usuarios');
      if (usuariosGuardados) {
        return JSON.parse(usuariosGuardados);
      }
      console.log('No hay datos de usuarios en localStorage');
      return [];
    } catch (error) {
      console.error('Error al cargar desde localStorage:', error);
      return [];
    }
  };
  
  guardarUsuarios();


const usuariosCargados = cargarUsuarios();
console.log('Usuarios cargados:', usuariosCargados);