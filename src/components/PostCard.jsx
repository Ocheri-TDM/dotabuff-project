import { Link } from "react-router-dom";

const PostCard = ({post, onClick}) => {
    return(
        <Link to={`/Post24/${post.id}`} onClick={onClick}>
            <div className="news-card">
                <div className="container">
                    <h3 className="news-title style1">{post.title}</h3>
                    <span className="date">{post.date}</span>
                    <span className="category">{post.category}</span>
                </div>
            </div>
        </Link>
    );
}

export default PostCard;