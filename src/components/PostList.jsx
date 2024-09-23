import PostCard from "./PostCard";
import { useState, useEffect} from "react";
import axios from "axios";
import LoadingPost from "./LoadingPost";
function PostList(){
const [posts, setPosts] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [isError, setIsError] = useState(false);

useEffect(() => {
    async function fetchPosts() {
        try{
            setIsLoading(true);
            const response = await axios.get('https://89c6ff6cb306a60e.mokky.dev/post');
            setPosts(response.data);
        } catch(error){
            setIsError(true);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    fetchPosts();
}, []); 

    if (isError) {
        return(
            <Error/>
        )
    }

    return(
        <section className="block">
            <div className="news-block">
                {isLoading ? (<LoadingPost/>) : (
                    <>
                        {posts.map((post) => (
                            <PostCard key={post.id} post={post} />  
                        ))}
                    </>
                )}
            </div>
        </section>
    );
}
export default PostList;