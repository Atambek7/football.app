import { useState, useEffect } from "react";
import BackIcon from "../assets/images/categories/back.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import LoadingDetail from "../components/LoadingDetail";
import Error from "../components/Error";
function PostDetailPage() {

   const {id} = useParams();
   const [post, setPost] = useState({});
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState (false);

   useEffect(() => {
    async function fetchPost() {
       try {
        setIsLoading(true);
        const response = await axios.get(`https://d2271c6898b7cfb8.mokky.dev/post/${id}`);
        setPost(response.data);
    }   catch (error) {
        setIsError(true);
    console.log(error);
       } finally {
        setIsLoading(false);
       }
    }
    fetchPost();
    }, [id]);

    if (isError) {
        return <Error />;
    }
      


    return (
        <section class="mobile-block">
            <Link to="/" class="back-button">
                <div class="container">
                    <img src={BackIcon} alt="Back icon"/>
                    <span class="relative-top">Назад</span>
                </div>
            </Link>
            {isLoading ? (<LoadingDetail />) : (
              <div class="container"><div class="post-detail-block"></div>
                <h3 class="news-card_title">{post.title}</h3>
                <span class="news-card">{post.date}</span>
                <p class="description">
                    {post.description}
                </p>
                <br />
                <img class = "img" src={post.imageUrl} alt={post.title} />
                <span class="author">Источник: <strong class="light-success-text">{post.author}</strong></span>
                <button class="tag-button">{post.category}</button>
            </div>)}
        </section>
    );
}

export default PostDetailPage;