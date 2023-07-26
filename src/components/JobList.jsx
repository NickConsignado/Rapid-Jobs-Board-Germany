import { useDispatch } from "react-redux";
import { addProductToCart } from "../store/cartReducer";
import { Link } from "react-router-dom";


function JobList(props) {
  const { title,id, tags,location, company, description} = props
  const dispatch = useDispatch()

  function handleClick(){

    dispatch(addProductToCart(
    {
        id,
        title,
        company,
        location,
        tags,
        description
    }
    ))

   
    
  }

  return (
    <>
    <div className="container border d-flex row w-lg-50 mb-5 m-auto">
       <div className="col-lg-4 my-2">
       <dd  className="fw-bold">{title},</dd>
       <dd><i className="fa-solid fa-building me-2" style={{color:"#3A43C9"}}></i>{company}</dd>
       <dd><i className="fa-solid fa-earth-americas me-2" style={{color:"#3A43C9"}}></i>{location}</dd>
       </div>
       <div className="col-lg-6 my-2">
         <dd>{tags}</dd>
       </div>
       <div className="col-lg-1  align-self-center">
       <Link to="/JobDes"><span className="btn btn-outline-primary" onClick={handleClick}>Apply</span></Link>
       </div>
     </div>
    </>
  )
}

export default JobList
