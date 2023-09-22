import './registerEmpleado-styles.css';
import { Link } from 'react-router-dom';
import imgLoginUser from '../../img/login.png';
import imgCasa from '../../img/casa.png';

export const RegisterEmpleado = () => {
    return (
    <div class="background-re">
        <div class="principal">
            <img src={imgLoginUser} title="Back home" alt="backHome"/>
            <div class="titles">
                <h3>¡REGÍSTRATE!</h3>
                <span>Ingresa los siguientes datos</span>
            </div>
            <form class="registerForm" action="">
                <label for="">Nombre Completo: </label>
                <input type="text" class="txtInput" name="nombre" id="" />
                <label for="">Correo electrónico: </label>
                <input type="email" class="txtInput" name="email" id="" />
                <label for="">Teléfono: </label>
                <input type="text" class="txtInput" name="telefono" id="" />
                <label for="">Contraseña: </label>
                <input type="password" class="txtInput" name="clave" id="" />

                <input type="submit" value="REGISTRARME"/>
            </form>
            <Link to="">Regístrate aquí</Link>
        </div>
        <Link to="/" class="backHome">
            <img src={imgCasa} title="Back home" alt="backHome"/>
        </Link>
    </div>
    );
}
