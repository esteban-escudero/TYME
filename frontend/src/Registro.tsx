// Importa los estilos del formulario de registro
import './Registro.css';
// Importa la imagen del logo de TYME
import tymeLogo from './TYME Logo.png';

// Componente funcional de Registro
function Registro() {
  return (
    // Contenedor principal que incluye el formulario y el logo
    <div className="main-container">
      
      {/* Contenedor del formulario de registro */}
      <div className="form-container">
        <h2>Registro</h2> {/* Título del formulario */}

        {/* Campo para ingresar el nombre completo */}
        <div className="input-group">
          <label htmlFor="nombreCompleto">Nombre Completo</label>
          <input
            type="text"
            id="nombreCompleto"
            name="nombreCompleto"
            placeholder="Nombre Completo"
          />
        </div>

        {/* Campo para ingresar el correo electrónico */}
        <div className="input-group">
          <label htmlFor="correoElectronico">Correo Electronico</label>
          <input
            type="text"
            id="correoElectronico"
            name="cE"
            placeholder="Correo Electronico"
          />
        </div>

        {/* Campo para ingresar la contraseña */}
        <div className="input-group">
          <label htmlFor="contraseña">Contraseña</label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            placeholder="Contraseña"
          />
        </div>

        {/* Campo para repetir la contraseña */}
        <div className="input-group">
          <label htmlFor="repetirContraseña">Repetir Contraseña</label>
          <input
            type="password"
            id="repetirContraseña"
            name="repetirContraseña"
            placeholder="Repetir Contraseña"
          />
        </div>

        {/* Botón para enviar el formulario de registro */}
        <button type="submit">Registrarse</button>
      </div>

      {/* Contenedor del logo de TYME */}
      <div className="logo-container">
        <img src={tymeLogo} alt="Logo TYME" className="login-logo" />
      </div>
    </div>
  );
}

export default Registro;
