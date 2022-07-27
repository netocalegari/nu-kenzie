import NuKenzieLanding from '../../assets/img/NuKenzieLanding.png'
import {Container} from './styles.js';

function LandingPage({setIsLoggedIn}) {

  function login() {
    setIsLoggedIn(true);
  };

  return (
    <Container>
      <figure>
        <img src={NuKenzieLanding} alt="" />
      </figure>

      <h1>Centralize o controle das suas finanças</h1>
      <p>de forma rápida e segura</p>

      <button onClick={() => login()}>Iniciar</button>
    </Container>
  )
}

export default LandingPage;