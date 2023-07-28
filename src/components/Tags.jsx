import { useSelector } from "react-redux"
import { Link } from "react-router-dom";


function Tags (){
    const cart = useSelector(state => state.cart)

    
    return(
        <>
         <h3>Job Description</h3>
         <Link to="/Jobs"><button className="btn btn-danger m-3 " onClick={event =>  window.location.href="/Jobs"}>Go back</button></Link>
        <div  className="border shadow m-lg-3 ms-lg-5 mt-5">
            {
            cart.map(
                cartItem =>{
                    
                        return (
                      
            <div className="flex-wrap d-flex row mb-5 ">
                <div className="col-lg-4 my-2 m-lg-5">
                <dd className="text-primary">{cartItem.title},</dd>
                <dd><i className="fa-solid fa-building me-lg-2" style={{color:"#3A43C9"}}></i>{cartItem.company},</dd>
                <dd><i className="fa-solid fa-earth-americas me-lg-2" style={{color:"#3A43C9"}}></i>{cartItem.location}</dd>
                
                </div>  
                <div className="col-lg-6 my-lg-2 mt-lg-5">
                    <dd>{cartItem.tags}</dd>
                </div>
                
                <div className="container col-lg-8 mt-5">
                <p dangerouslySetInnerHTML={{__html:cartItem.description}}></p>
                </div>
            </div>
                            )
                        }
                    )
                }
        </div> 
        </>
    )
}
export default Tags
