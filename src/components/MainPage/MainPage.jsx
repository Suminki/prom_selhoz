import './MainPage.css'

export default function MainPage() {
    return (
        <main>
            <div className="page-container">
                <section className="promo">
                    <div className="description">
                        <img src="/logo.svg"></img>
                        <p>Обурудуем ваше хозяйство <b>надёжной</b> техникой</p>
                    </div>
                    <div className="image">
                        <div className="background">
                            <img src="/tractor.png"></img>
                        </div>
                    </div>
                </section>
                <section className="advantages">
                    <h1>ПОЧЕМУ<br></br>ВЫБИРАЮТ<br></br>НАС?</h1>
                    <ul>
                        <li>
                            <div className="point"></div>
                            <p>Платформа №1 по<br></br>продаже спецтехники</p>
                        </li>
                        <li>
                            <div className="point"></div>
                            <p>Большой<br></br>выбор</p>
                        </li>
                        <li>
                            <div className="point"></div>
                            <p>Более 5 тысяч<br></br>совершённых сделок</p>
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    )
}