import PostDetailBlock from "../components/PostDetailBlock";
import Header from "../components/Header";
import BackP from "../components/BackP";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Post24 = () =>{
    
    const navigate = useNavigate();
    const location = useLocation();

    const defaultPageClass = 'default-page-class';
    const defaultButtonClass = 'default-button-class';

    const [pageClass, setPageClass] = useState(location.state?.pageClass || defaultPageClass);
    const [buttonClass, setButtonClass] = useState(location.state?.buttonClass || defaultButtonClass);

    useEffect(() => {
        if (location.state?.pageClass && location.state?.buttonClass) {
            console.log("Location state found: ", location.state);
            setPageClass(location.state.pageClass);
            setButtonClass(location.state.buttonClass);
        } else {
            console.log("No location.state found, using default classes");
        }
    }, [location.state]);

    return(
        <>
        <Header/>
        <button onClick={() => navigate(-1)} className={`back-button ${buttonClass}`}>
          <BackP/> 
        </button>
        <main className={pageClass}>
            <PostDetailBlock />
        </main>
        </>
    );
}
export default Post24;