export default function Review( {children} ) {
    return (
        <li>
            <img src="./reviewer.png"></img>
            <div className="review-content">
                {children[0]}
                <ul className="rate">
                    <li><img src="./star.svg"></img></li>
                    <li><img src="./star.svg"></img></li>
                    <li><img src="./star.svg"></img></li>
                    <li><img src="./star.svg"></img></li>
                    <li><img src="./star.svg"></img></li>
                </ul>
                {children[1]}
            </div>
        </li>
    ) 
}