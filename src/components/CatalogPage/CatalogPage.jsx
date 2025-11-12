import "./CatalogPage.css"
import { useState } from "react"

function formatNumber(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default function CatalogPage( {tractors} ) {
    const [slide, setSlide] = useState(0);
    const nextSlide = () => {
        setSlide((index) => (index === tractors.length - 1 ? 0 : index + 1));
    };
    const prevSlide = () => {
        setSlide((index) => (index === 0 ? tractors.length - 1 : index - 1));
    };

    const data = tractors[slide];

    return (
        <main>
            <div className="page-container">
                <section className="slider-container">
                    <div className="slider">
                        <button className="button-back" onClick={prevSlide}></button>
                        <div className="image-containter">
                            <img src={data.url}></img>
                        </div>
                        <button className="button-next" onClick={nextSlide}></button>
                    </div>
                    <div className="description">
                        <div className="stats">
                            <h2>{data.model}</h2>
                            <p>Год производства: {data.year}</p>
                            <p>Кол-во лошадиных сил: {data.horse_power}</p>
                        </div>
                        <div className="buy">
                            <p>{formatNumber(data.price)} руб</p>
                            <button>КУПИТЬ</button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}