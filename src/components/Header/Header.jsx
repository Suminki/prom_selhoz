import './Header.css'

export default function Header({page, callback}) {
    return (
        <header>
            <div className="nav-menu">
                <img src='./logo.svg'></img>
                <nav>
                    <ul>
                        <li className={page === "main" ? "active" : ""}>
                            <button onClick={() => {callback("main")}}>ГЛАВНАЯ</button>
                        </li>
                        <li className={page === "catalog" ? "active" : ""}>
                            <button onClick={() => {callback("catalog")}}>КАТАЛОГ</button>
                        </li>
                        <li className={page === "reviews" ? "active" : ""}>
                            <button onClick={() => {callback("reviews")}}> ОТЗЫВЫ</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
} 