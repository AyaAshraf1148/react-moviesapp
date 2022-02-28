import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navbar()
{
  const favCount = useSelector((state)=> state.favorite.numberCart )
  const handleOnSubmit =(e)=>
  {e.preventDefault()
  };
    return(<>
    <nav className="navbar navbar-expand-lg navbar-light mb-5">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#"><span className="letter text-danger">M</span>ovie<span className="letter text-danger">L</span>ist</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active text-light" aria-current="page" href="/">Home</a> */}
          <Link to="/" className="nav-link active text-light">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link text-light" >Register</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link text-light" >Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/favourites" className="nav-link text-light" >Favourites<span className="number">{favCount}</span></Link>
        </li>
      </ul>
       <form className="d-flex" onSubmit={handleOnSubmit}>
        <input className="search" type="search" placeholder="Search..." aria-label="Search"/>
        {/* <button className="btn btn-outline-light bg-danger" type="submit">Search</button> */}
      </form> 
    </div>
  </div>
</nav></>)
}