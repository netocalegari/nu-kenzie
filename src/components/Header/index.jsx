import NuKenzie from "../../assets/img/NuKenzie.png"
import {TopHeader} from './styles.js';

function Header({setIsLoggedIn}) {
  function Logout() {
    setIsLoggedIn(false);
  }

  return (
    <TopHeader>
      <figure>
        <img src={NuKenzie} alt="Logo NuKenzie" />
      </figure>
      <button onClick={Logout}>Logout</button>
    </TopHeader>
  )
}

export default Header;