import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const API_KEY = '0Czoeb70hlx1NB8FrfgHHIYM4sX4wWziA7Hg2j2l6MTLmA4R';
  const API_URL = `https://api.currentsapi.services/v1/latest-news?language=fr&apiKey=${API_KEY}`;

  const [articles, setArticles]  = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
        try{
            const { data, status } = await axios.get(API_URL)
            const news = data.news;
            
            if(status === 200) {
                setArticles(news)
            }
        }catch(error){
            console.log(error.message);
        }
    }
    fetchPost()
}, [])

  return (
    <div id="container-articles" className="container">
        {articles.map(article => ( 
            <div key={article.id} className="article"> 
                <Link to={{ pathname: `/articles/${article.id}` }}>    
                    <img alt={article.title} src={article.image}/>
                    <h2>{article.title}</h2>
                    <span className="cateogry">{article.category}</span><br/>
                    {article.description}<br/>
                </Link>
                <button><Link to={article.url}>Lire la suite</Link></button>
            </div>    
        ))} 
    </div>
  )
}

export default Home