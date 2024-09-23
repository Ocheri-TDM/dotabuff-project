import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingPDetails from "./LoadingPDetails";
const PostDetailBlock = () => {

    const {id} = useParams();
    const [post, setPost] = useState ({});
    const [isLoading, setIsLoading] = useState(false);
    useEffect (() => {
        async function fetchPost(){
            try{
                setIsLoading(true);
                const respons = await axios.get(`https://89c6ff6cb306a60e.mokky.dev/post/${id}`);
                setPost (respons.data);
            } catch(error){
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPost();
    }, [id]);

    return (
        <div className="post">
            <div className="post-detail-block container">
            {isLoading ? (<LoadingPDetails/>) : (
                <>
                <h3 className="post-card-title">{post.title} </h3>
                <span className="date-post">{post.date}</span>
                <p className="post-card-title">{post.discription}</p>
                <img src={post.imgUrl} alt={post.title} />
                <span className="author">DOTABUFF:<strong className="author-name">{post.author}</strong></span>
                </>
            )}
            </div>
        </div>
    );
};

export default PostDetailBlock;