import "./ReviewsPage.css"
import { useState, useEffect } from "react";
import Review from "../Review/Review";

function AnimatedNumber({ value, duration = 1000}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // 0..1
      const currentValue = Math.floor(progress * value);

      setDisplay(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplay(value); // гарантированно конечное значение
      }
    }

    requestAnimationFrame(animate);
  }, [value, duration]);

  return <span>{display}</span>;
}

function RingProgress({ percent = 1, duration = 1000, children}) {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let start = null;
    function animate(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setAngle(progress * percent * 360);
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, [percent, duration]);

  return (
    <div
        className="circle-green"
        style={{
            background: `conic-gradient(
          from 90deg,
          #06925C 0deg,
          #12CD86 ${angle}deg,
          transparent ${angle}deg 360deg
        )`,
        }}
    >
        {children}
    </div>
  );
}

export default function ReviewsPage() {
    return (
        <main>
            <div className="page-container">
                <section className="reviews">
                    <div className="stats">
                        <h2>Наши отзывы:</h2>
                        <div className="circle">
                            <RingProgress percent={0.97} value={1000}>
                                <div className="hole">
                                    <p>
                                        <AnimatedNumber value={97} duration={1000}/>%
                                    </p>
                                </div>
                            </RingProgress>
                        </div>
                        <p>Пользователей довольны качеством нашей техники</p>
                    </div>
                    <ul className="reviews-list">
                        <Review>
                            <h3>Сумин Кирилл</h3>
                            <p>Прекрасное качество техники, всем рекомендую!</p>
                        </Review>
                        <Review>
                            <h3>Тайлер Дёрден</h3>
                            <p>Лучший сервис!</p>
                        </Review>
                        <Review>
                            <h3>Кирилл Сумин</h3>
                            <p>Доступнее цен вы больше нигде не найдёте!</p>
                        </Review>
                    </ul>
                </section>
            </div>
        </main>
    )
}