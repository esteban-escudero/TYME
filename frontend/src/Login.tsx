// Importa los estilos CSS específicos para este componente
import './Login.css';

// Importa el logo de TYME para usarlo como imagen en el formulario
import tymeLogo from './TYME Logo.png';

// Importa el hook 'useNavigate' de React Router para redirigir a otras páginas
import { useNavigate } from 'react-router-dom';

function Login() {
  // Inicializa el hook de navegación
  const navigate = useNavigate();

  return (
    // Contenedor principal que agrupa el formulario y el logo
    <div className="main-container"> 

      {/* Contenedor del formulario de inicio de sesión */}
      <div className="form-container"> 
        {/* Título del formulario */}
        <h2>Inicio de sesión</h2>

        {/* Grupo de entrada para el correo */}
        <div className="input-group">
          <label htmlFor="correo">Correo</label>
          <input type="text" id="correo" name="correo" placeholder="Correo" />
        </div>

        {/* Grupo de entrada para la contraseña */}
        <div className="input-group">
          <label htmlFor="contrasena">Contraseña</label>
          <input type="password" id="contrasena" name="contrasena" placeholder="Contraseña" />
        </div>

        {/* Sección que incluye "Recordar" y "Olvidé mi contraseña" */}
        <div className="remember-forgot">
          {/* Opción para recordar sesión */}
          <div className="remember-me">
            <input type="checkbox" id="recordar" name="recordar" />
            <label htmlFor="recordar">Recordar</label>
          </div>

          {/* Enlace para recuperar la contraseña */}
          <a href="#" className="forgot-password">
            Olvidé mi contraseña
          </a>
        </div>

        {/* Botón para enviar el formulario de inicio de sesión */}
        <button type="submit">Iniciar</button>

        {/* Botón que redirige a la página de registro al hacer clic */}
        <button type="button" onClick={() => navigate('/registro')}>
          Registrarse
        </button>
      </div>

      {/* Contenedor del logo al lado derecho del formulario */}
      <div className="logo-container">
        <img src={tymeLogo} alt="Logo TYME" className="login-logo" />
      </div>
    </div>
  );
}

export default Login;
