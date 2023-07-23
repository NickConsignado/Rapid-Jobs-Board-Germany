import SirDom from'../images/SirDom.png';
import SirJay from'../images/SirJay.png';
import { useEffect } from "react"
function Testimonial() {
    useEffect(() => {
        document.title = 'Testimonial'
      }, [])
    return (
    <>
    <div id="testimonial" className="container-fluid col-lg-7 mt-3 m-auto">
       <h1>Testimonial</h1>
        <div className="d-flex row mt-5">
        <img src={SirJay} alt="Sir Jay " style={{width: "400px", height: "350px",}} />
          <div className="col-lg-5 text-center">
            <h1 className=" mt-3">"Jay"</h1>
            <p>From the very beginning, Jay showcased a deep understanding of our 
            requirements and came up with innovative solutions to meet our goals. 
            Their coding skills and attention to detail were impeccable, resulting 
            in a website that is not only visually appealing but also highly functional. 
            They consistently delivered high-quality code, ensuring that our website was both efficient and scalable.
            </p>
          </div>
        </div>
        
        <div className="justify-content-evenly my-5 d-flex row">
          <img src={SirDom} alt="Sir Dom" style={{width: "400px", height: "350px"}} className="d-lg-none d-md-block" />
          <div className="col-lg-5 text-center">
            <h1 className=" mt-3">"Dom"</h1>
            <p>This job application website offers an unparalleled user experience that is both intuitive and user-friendly. 
              The streamlined interface allows me to effortlessly navigate through various job listings, saving me precious 
              time and effort. The search filters and advanced algorithms ensure that I can quickly find relevant positions 
              tailored to my skills and preferences.
            </p>
          
          </div>
        <img src={SirDom} alt="Sir Dom" style={{width: "400px", height: "350px"}} className="d-none d-sm-block" />
        </div>
    </div>
    </>
    )
}

export default Testimonial