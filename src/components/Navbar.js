import Image from '../img/logo.svg'
import Form from './Form'

const Navbar = () => {
  return ( 
    <nav className="navbar" onClick={() => window.scroll(0,0)}>
      <div className="container">
        <div className="navbar-container">
          <img src={Image} alt="" className="logo"/>
          <Form />
        </div>
      </div>
    </nav>
   );
}
 
export default Navbar;