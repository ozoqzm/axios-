import React from "react";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";
import { useParams } from "react-router-dom";

const NewsPage = () => {
  const { category } = useParams();
  const selectedCategory = category || "all";
  console.log(category);

  return (
    <div>
      <Categories />
      <NewsList category={selectedCategory} />
    </div>
  );
};

export default NewsPage;
