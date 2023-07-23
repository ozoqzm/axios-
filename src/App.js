import React, { useState, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
import NewsPage from "./pages/NewsPage";

function App() {
  // useState로 카테고리 관리-> 기본값 all (전체 보기)
  // const [category, setCategory] = useState("all");

  // const onSelect = useCallback((category) => setCategory(category), []);
  // return (
  //   <>
  //     <Categories category={category} onSelect={onSelect} />
  //     <NewsList category={category}></NewsList>
  //   </>
  // );
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category?" element={<NewsPage />} />
    </Routes>
  );
}

export default App;
