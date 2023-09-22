import './loginPage-styles.css';
import imgLoginUser from '../../img/login.png';
import imgCasa from '../../img/casa.png';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
    return (
    <div class="background-lp">
        <div class="principal-lp">
            <img src={imgLoginUser} title="Back home" alt="backHome"/>
            <div class="titles">
                <h3>¡BIENVENIDO!</h3>
                <span>Iniciar sesión</span>
            </div>
            <form class="loginForm-lp" action="">
                <label for="">Correo electrónico: </label>
                <input type="email" class="txtInput" name="" id=""/>
                <label for="">Contraseña: </label>
                <input type="password" class="txtInput" name="" id=""/>

                <input type="submit" value="INICIAR SESIÓN"/>
            </form>
            <Link to="">Regístrate aquí</Link>
        </div>
        <Link to="/" class="backHome-lp">
            <img src={imgCasa} title="Back home" alt="backHome"/>
        </Link>
    </div>
    );
}
