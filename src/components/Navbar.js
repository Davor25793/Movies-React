import Image from '../img/logo.svg'

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <div className="container">
        <div className="navbar-container">
            <img src={Image} alt="" className="logo"/>
        </div>
      </div>
    </nav>
   );
}
 
export default Navbar;