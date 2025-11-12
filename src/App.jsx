import './App.css'
import { useState } from 'react'
import { tractors } from './data';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import CatalogPage from './components/CatalogPage/CatalogPage';
import ReviewsPage from './components/ReviewsPage/ReviewsPage';


let switchPage = function(page) {
  switch (page) {
    case "main":
      return <MainPage />
    case "catalog":
      return <CatalogPage tractors={tractors}/>
    case "reviews":
      return <ReviewsPage />
  }
}

export default function App() {
  let [page, setPage] = useState((sessionStorage.getItem("lastPage") === null) ? "main" : sessionStorage.getItem("lastPage"));
  let callback = (pageName) => {
    setPage(pageName)
    sessionStorage.setItem("lastPage", pageName)
  }

  return (
    <>
      <Header page={page} callback={callback} />
      {switchPage(page)}
      <Footer />
    </>
  )
}
