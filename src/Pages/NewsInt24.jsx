import Header from "../components/Header";
import Back from "../components/Back";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import LoadingPost from "../components/LoadingPost";
import PostCard from "../components/PostCard";
const NewsInt24 = ({post}) => {
  const [posts, setPosts] = useState([]);
  const {id} = useParams();
  const [category, setCategory] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
      async function fetchCategory(){
          try {
              const response = await axios.get(`https://89c6ff6cb306a60e.mokky.dev/int/${id}`);
              setCategory(response.data);
          } catch (error) {
              console.log(error);
          }
      }

      async function fetchPosts() {
          try {
              setIsLoading(true);
              const response = await axios.get('https://89c6ff6cb306a60e.mokky.dev/post');
              setPosts(response.data);
          } catch (error) {
              console.log(error);
          } finally {
              setIsLoading(false);
          }
      }

      fetchPosts();
      fetchCategory();
  }, [id]);

  const pageClass = `a${category.id}p`;
  const buttonClass = `a${category.id}bb`;
  return (
      <>
          <Header />
          <div className={`back-button ${buttonClass}`}>
              <Back />
          </div>
          <p className="qwe">{category.name}</p>
          <main className={pageClass}>
              {isLoading ? (<LoadingPost />) : (
                  <>
                      {posts.map((post) => {
                          return post.category === category.name ? (
                              <PostCard key={post.id} post={post} onClick={() => {
                                console.log("Navigating to Post24 with state: ", { pageClass, buttonClass });
                                navigate(`/Post24/${post.id}`, { state: { pageClass, buttonClass } });
                              }}/>
                          ) : null;
                      })}
                  </>
              )}
          </main>
      </>
  );
}
export default NewsInt24;
