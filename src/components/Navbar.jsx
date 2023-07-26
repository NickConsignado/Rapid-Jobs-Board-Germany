import { Link } from 'react-router-dom';
import mainLogo from'../images/final-logo.png';


function offcanvas() {
  return (
<>

<header>

<nav class="navbar navbar-expand-lg bg-light">

  <div class="container-fluid">
    <p class="navbar-brand"><img src={mainLogo} alt="Logo" style={{width:"200px", height:"80px"}} /></p>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="nav nav-tabs collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="./"><span  class="nav-link" aria-current="page" >Home</span></Link>
        </li>
        <li class="nav-item">
        <Link to="/about"><span class="nav-link">About</span></Link>
        </li>
        <li class="nav-item">
        <Link to="/Jobs"><span class="nav-link" >Jobs</span></Link>
        </li>
        <li class="nav-item">
        <Link to="/Testimonial"><span class="nav-link" >Testimonial</span></Link>
        </li>
        <li class="nav-item">
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </li>
      </ul>
          <div class="container me-lg-0 col-lg-3">                  
          <div id="login-form" className="d-flex ">
                    <h5>Login:</h5>
                    <input className="form-control me-2 ms-2" type="text" name="username" id="username" placeholder="Username" aria-label="Username"/>
                    <input className="form-control me-2" type="password" name="password" id="password" placeholder="Password" aria-label="Password"/>
                    <button onClick="loginUser()" className="btn btn-outline-primary" type="submit">Signup</button>
                </div>

                <div id="logged-in" className="d-none">
                    <h3>User: &nbsp;<span id="logged-in-user"className="me-5"></span></h3>
                    <button onClick="logout()" className="btn btn-outline-primary ms-5" type="submit">Logout</button>
                </div>

                  <span className="d-flex justify-content-center mt-2 text-primary" id="c-Account">Create Account?</span>
          </div>  
    </div>
  </div>  
</nav>
</header>

              
                
             
      


    </>
           

  )
}

export default offcanvas
