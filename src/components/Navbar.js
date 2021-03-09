import Image from '../img/logo.svg'

const Navbar = () => {

  const onClick = () => {
    window.location.reload()
  }

  return ( 
      <nav className="navbar" onClick={onClick}>
        <img src={Image} alt="" className="logo"/>
      </nav>
   );
}
 
export default Navbar;