const Index = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap');

        .wedding-body {
          min-height: 100vh;
          background: #fef7e8;
          background-image: radial-gradient(circle at 10% 20%, rgba(255,245,225,0.8) 0%, #fef5e6 100%);
          font-family: 'Playfair Display', 'Georgia', serif;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        .heart-deco {
          position: fixed;
          font-size: 28px;
          user-select: none;
          pointer-events: none;
          opacity: 0.5;
          z-index: 0;
        }
        .heart1 { top: 20px; left: 20px; }
        .heart2 { top: 20px; right: 30px; }
        .heart3 { bottom: 20px; left: 25px; }
        .heart4 { bottom: 20px; right: 25px; }
        .heart5 { top: 50%; left: 10px; transform: translateY(-50%); }
        .heart6 { top: 50%; right: 15px; transform: translateY(-50%); }
        .heart7 { top: 100px; left: 5%; }
        .heart8 { bottom: 80px; right: 8%; }

        .invitation-card {
          position: relative;
          z-index: 10;
          max-width: 650px;
          width: 100%;
          background: rgba(255, 253, 245, 0.95);
          border-radius: 64px 48px 80px 48px;
          box-shadow: 0 30px 45px -20px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,245,215,0.8);
          padding: 2.8rem 2.4rem 3rem;
          text-align: center;
        }

        .names {
          font-size: clamp(1.8rem, 6vw, 2.8rem);
          font-weight: 500;
          letter-spacing: 2px;
          color: #b97f44;
          margin-bottom: 1.5rem;
          text-shadow: 0 1px 1px #fff4e6;
        }

        .greeting {
          font-size: clamp(1rem, 3vw, 1.25rem);
          color: #6e4b2e;
          margin-bottom: 2rem;
          line-height: 1.5;
          background: #fffaf0;
          display: inline-block;
          padding: 0.5rem 1.8rem;
          border-radius: 60px;
          box-shadow: inset 0 0 0 1px #ffe3bf;
        }

        .main-message {
          font-size: clamp(1rem, 3vw, 1.35rem);
          color: #3e2a1f;
          margin: 1.8rem 0 2rem;
          line-height: 1.6;
        }

        .photo-button {
          display: inline-block;
          background: linear-gradient(135deg, #f3cf9a, #e6b875);
          padding: 20px 48px;
          border-radius: 80px;
          box-shadow: 0 18px 28px -10px rgba(160,100,30,0.4), 0 4px 12px rgba(0,0,0,0.1);
          text-decoration: none;
          font-size: clamp(1.5rem, 5vw, 2rem);
          font-weight: bold;
          color: #4a2a12;
          margin: 20px 0;
          letter-spacing: 4px;
          transition: all 0.2s ease;
          font-family: 'Playfair Display', 'Georgia', serif;
        }

        .photo-button:hover {
          background: linear-gradient(135deg, #ffdead, #f5c48a);
          transform: scale(1.03);
          box-shadow: 0 22px 32px -12px rgba(150,90,20,0.5);
          color: #2f1a09;
        }

        .photo-button:active {
          transform: scale(0.97);
        }

        .love-footer {
          margin-top: 2rem;
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          font-style: italic;
          color: #b48c5c;
          background: #fff9ef;
          display: inline-block;
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
        }

        .hint {
          margin-top: 20px;
          font-size: 0.9rem;
          color: #cfaa7a;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }

        .heart-photo-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 1.6rem;
        }

        .heart-photo {
          width: 140px;
          height: 140px;
          object-fit: cover;
          clip-path: path('M70 120 C70 120 10 80 10 40 C10 20 25 5 45 5 C56 5 66 12 70 20 C74 12 84 5 95 5 C115 5 130 20 130 40 C130 80 70 120 70 120Z');
          filter: drop-shadow(0 6px 18px rgba(180,100,60,0.3));
          display: block;
        }
      `}</style>

      <div className="wedding-body">
        <div className="heart-deco heart1">🤍</div>
        <div className="heart-deco heart2">🤍</div>
        <div className="heart-deco heart3">🤍</div>
        <div className="heart-deco heart4">🤍</div>
        <div className="heart-deco heart5">🤍</div>
        <div className="heart-deco heart6">🤍</div>
        <div className="heart-deco heart7">🤍</div>
        <div className="heart-deco heart8">🤍</div>

        <div className="invitation-card">
          <div className="heart-photo-wrap">
            <img
              src="https://s10.iimage.su/s/13/ufbqGyWxW8tQ6sSmHsijiUqzkzutlaVgofAWHJu9j.jpg"
              alt="Александр и Анастасия"
              className="heart-photo"
            />
          </div>

          <div className="names">Александр &amp; Анастасия</div>

          <div className="greeting">
            💌 Уважаемые гости праздника! 💌
          </div>

          <div className="main-message">
            Приглашаем вас посмотреть <strong>наши первые фото</strong> со свадьбы ✨<br />
            Жмите на большую кнопку, чтобы перейти в беседу ВК 👇
          </div>

          <div style={{ fontSize: "2rem", animation: "bounce 1s infinite", display: "inline-block", marginBottom: "4px" }}>
            👇
          </div>

          <a
            href="https://vk.me/join/5GXpv79kl/bOFNJXQtU9bopaTRtsnFcxD2c="
            target="_blank"
            rel="noopener noreferrer"
            className="photo-button"
          >
            ❤️ ЖМИ
          </a>

          <div className="love-footer">
            ❤️ Александр и Анастасия, мы любим вас! ❤️
          </div>

          <div className="hint">💭 нажми на фоточку (кнопку) 💭</div>
        </div>
      </div>
    </>
  )
}

export default Index