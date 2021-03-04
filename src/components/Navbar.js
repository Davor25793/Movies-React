import Image from '../img/logo.jpg'

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <div className="container">
        <div className="navbar-container">
          <img src={Image} alt="" className="logo"/>
          <form>
            <input type="text"  id="search" placeholder="Search movie"/>
          </form>
        </div>
      </div>
    </nav>
   );
}
 
export default Navbar;