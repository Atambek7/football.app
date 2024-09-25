import { useEffect, useState } from "react";
import homeIcon from "../assets/images/categories/футбик.jpeg";
import { Link } from "react-router-dom";
import axios from "axios";
import LoadingRow from "../components/LoadingRow";
import Error from "../components/Error";

function CategoriesPage() {


      const [categories, setCategories] = useState ([]);
      const [isLoading, setIsLoading] = useState (false);
      const [isError, setIsError] = useState (false);

      useEffect(() => {
        async function fetchCategories() {
            try {
                setIsLoading(true);
                 const response = await axios.get(`https://d2271c6898b7cfb8.mokky.dev/category`);
                 setCategories(response.data);
            } catch(e) {
                setIsError(true)
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        }
        fetchCategories();
      },[]);

      if (isError) {
        return <Error />;
    }

        return(
        <section class="mobile-block">
            <div class="mobile-block__header is-warning">
           
                
            </div>
            {isLoading ? (<LoadingRow />) : (
                <div class="container">
                
            <div class="category-row">
                <Link to="/" class="category-item">
                    <img src= {homeIcon} alt="Home" class="category-item__image"/>
                    <span class="category-item__title">Шар новостей</span>
                </Link>
                {categories.map((category) => (
                    <Link to={`/category/posts/${category.id}`} class="category-item">
                    <img src={category.imageUrl} alt={category.name} class="category-item__image"/>
                    <span class="category-item__title">{category.name}</span>
                </Link>
                ))}
                
            </div>
        </div>
                )}
        
        </section>
    );
}

export default CategoriesPage;
