import backbutton from "../assets/images/back-button.svg"
import { Link } from "react-router-dom";
const Back = () =>{
    return(
        <Link to="/">
            <div className="back">
                <img src={backbutton} alt="backbutton"/>
                <h3>Back</h3>
            </div>
        </Link>
    );
}
export default Back;