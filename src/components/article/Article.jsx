import React from "react";
import "./article.css";

const Article = ({ linkURL, imgUrl, date, text, desc }) => (
  <div className="ao__blog-container_article">
    <div className="ao__blog-container_article-image">
      <a href={linkURL}><img src={imgUrl} alt="projects" /></a>
    </div>
    <div className="ao__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
        <p>{desc}</p>
      </div>
    </div>
  </div>
);

export default Article;
