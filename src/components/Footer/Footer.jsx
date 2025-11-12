import './Footer.css'
import logo from '/logo.svg'
import telegramLogo from '/telegramLogo.svg'
import vkLogo from '/vkLogo.svg'
import instagramLogo from '/instagramLogo.svg'

export default function Bottom() {
    return (
        <footer>
            <div className="footer-container">
                <div className="info">
                    <img src="/logo.svg"></img>
                    <div>
                        <p className="org">ООО "ПРОМСЕЛЬХОЗ" 2015-2025</p>
                        <p className="rights">Все права защищены</p>
                    </div>
                </div>
                <div className="contacts">
                    <section className="socials">
                        <h2>Социальные сети:</h2>
                        <ul>
                            <li>
                                <a href="https://web.telegram.org/k/#@SumiNKi"><img src={telegramLogo}></img></a>
                            </li>
                            <li>
                                <a href="https://web.telegram.org/k/#@SumiNKi"><img src={vkLogo}></img></a>
                            </li>
                            <li>
                                <a href="https://web.telegram.org/k/#@SumiNKi"><img src={instagramLogo}></img></a>
                            </li>
                        </ul>
                    </section>
                    <section className="phone">
                        <h2>Телефон:</h2>
                        <a href="tel:+79101019733">+7 910 101 97 33</a>
                    </section>
                </div>
            </div>
        </footer>
    )
}