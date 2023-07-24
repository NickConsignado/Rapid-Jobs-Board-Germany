import { useEffect } from "react";
import applicants from'../images/applicants.jpg';
import landingPagePhoto from'../images/landingPagePhoto.jpg';
import companyLogo from'../images/companylogo.jpg';
import { Link } from "react-router-dom";
function Home() {
  useEffect(() => {
    document.title = 'Home'
  }, [])

  return (
    <>
      <div id="home" className="mt-5">
      <img src={applicants} alt="Applicants" style={{width: "100%", height: "20vw"}} />
      <div className="container d-flex row m-auto mt-5">
      <div className="col-lg-6">
        <p className="text-center fs-3 mt-5">Welcome to<b className="text-primary">"Rapid Jobs Board Germany"</b> - Your Gateway to a World of Opportunities!</p>
      <p className="pt-2 mt-5 fs-5"> 
        In today's competitive job market, finding the perfect career path can be a daunting task. That's why we're here to simplify the process and connect talented individuals like you with exceptional job opportunities.
      </p>
      <div className="d-flex justify-content-center">
      <Link to="/Jobs"><button className="btn btn-outline-danger  mt-3" type="submit">View Careers</button></Link>
      </div>
    </div>
      <div className="col-lg-6">
        <img src={landingPagePhoto} alt="Photo" className="card mt-5" style={{width: "100%"}} />
      </div>
      
      <p className="text-center fs-5 mt-5">
      At <b className="text-primary">"Rapid Jobs Board Germany"</b>, we understand that every individual possesses unique skills, experiences, and aspirations. 
      Whether you're a fresh graduate eager to embark on your professional journey, a seasoned professional seeking a new challenge, 
      or someone looking to make a career transition, we have a diverse range of job listings to cater to your needs.
      Our platform offers a user-friendly interface designed to streamline your job search experience. 
    </p>    
    <br /><br /><br /><br /><br /><br /><br /><br />
      <img src={companyLogo} alt="CompanyLogo" style={{width: "100%", height: "40vw"}} className="mt-5" />
    </div>
    </div>
    </>
  )
}

export default Home
