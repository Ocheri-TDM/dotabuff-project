import TextMain from "./TextMain"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import LoadingInt from "./LoadingInt"
import axios from "axios"
const Int = () => {
    const [categories, setCategories] = useState([]); 
    const [isLoading, setIsLoading] = useState(false);
    useEffect (() => {
        async function fetchCategories() {
            try {
                setIsLoading(true);
                const respons = await axios.get(`https://89c6ff6cb306a60e.mokky.dev/int`);
                setCategories (respons.data);
            } catch(error) {
                console.log(error);
            }finally {
                setIsLoading(false);
            }
        }
        fetchCategories();
    }, []);
    return(
        <>
        <TextMain/>
        <main>
            <div class="minhead">
            {isLoading ? (<LoadingInt/>) : (
                <>
                    <div class="container">
                        <div class="category-row">
                            {categories.map((category) => {
                                const categoryClass = `a${category.id}`;
                                return (
                                    <Link to={`/News/Int24/${category.id}`} class={`category-item ${categoryClass}`}>
                                        <img src={category.imgUrl} alt={category.name} class="category-item-img"/>
                                        <span class="category-item-title">{category.name}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </>
            )}
            </div>
        </main>       
        </> 
    );
}

export default Int;
