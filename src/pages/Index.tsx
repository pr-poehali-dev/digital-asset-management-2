const Index = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap');

        .wedding-body {
          min-height: 100vh;
          background: #0a0a0a;
          background-image: radial-gradient(ellipse at 50% 0%, #2a2a2a 0%, #0a0a0a 70%);
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
          font-size: 22px;
          user-select: none;
          pointer-events: none;
          opacity: 0.15;
          z-index: 0;
          filter: grayscale(1);
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
          max-width: 600px;
          width: 100%;
          background: linear-gradient(160deg, #1c1c1c 0%, #111111 100%);
          border-radius: 48px;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 40px 80px -20px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.07);
          padding: 2.8rem 2.4rem 3rem;
          text-align: center;
        }

        .photo-title {
          font-size: clamp(1.2rem, 4vw, 1.6rem);
          font-weight: 400;
          letter-spacing: 3px;
          color: #ffffff;
          margin-bottom: 1.8rem;
          text-transform: uppercase;
          opacity: 0.9;
        }

        .greeting {
          font-size: clamp(0.95rem, 2.8vw, 1.15rem);
          color: #aaaaaa;
          margin-bottom: 1.8rem;
          line-height: 1.6;
          font-style: italic;
        }

        .main-message {
          font-size: clamp(0.95rem, 2.8vw, 1.2rem);
          color: #888888;
          margin: 1.4rem 0 1.8rem;
          line-height: 1.6;
        }

        .photo-button {
          display: inline-block;
          background: linear-gradient(135deg, #ffffff 0%, #cccccc 100%);
          padding: 18px 52px;
          border-radius: 80px;
          box-shadow: 0 12px 30px -8px rgba(255,255,255,0.15), 0 4px 12px rgba(0,0,0,0.5);
          text-decoration: none;
          font-size: clamp(1.3rem, 4vw, 1.8rem);
          font-weight: bold;
          color: #111111;
          margin: 16px 0;
          letter-spacing: 4px;
          transition: all 0.25s ease;
          font-family: 'Playfair Display', 'Georgia', serif;
        }

        .photo-button:hover {
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
          transform: scale(1.04);
          box-shadow: 0 20px 40px -10px rgba(255,255,255,0.25);
        }

        .photo-button:active {
          transform: scale(0.97);
        }

        .love-footer {
          margin-top: 2rem;
          font-size: clamp(0.95rem, 2.5vw, 1.1rem);
          font-style: italic;
          color: #666666;
          letter-spacing: 1px;
        }

        .hint {
          margin-top: 14px;
          font-size: 0.82rem;
          color: #444444;
          letter-spacing: 1px;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }

        .heart-photo-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 1.8rem;
        }

        .heart-photo {
          width: 170px;
          height: 170px;
          object-fit: cover;
          clip-path: path('M85 145 C85 145 12 96 12 48 C12 24 30 6 54 6 C67 6 80 14 85 24 C90 14 103 6 116 6 C140 6 158 24 158 48 C158 96 85 145 85 145Z');
          filter: drop-shadow(0 8px 24px rgba(0,0,0,0.7)) grayscale(0.2);
          display: block;
        }

        .divider {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          margin: 1.2rem auto;
        }
      `}</style>

      <div className="wedding-body">
        <div className="heart-deco heart1">♥</div>
        <div className="heart-deco heart2">♥</div>
        <div className="heart-deco heart3">♥</div>
        <div className="heart-deco heart4">♥</div>
        <div className="heart-deco heart5">♥</div>
        <div className="heart-deco heart6">♥</div>
        <div className="heart-deco heart7">♥</div>
        <div className="heart-deco heart8">♥</div>

        <div className="invitation-card">
          <div className="heart-photo-wrap">
            <img
              src="https://s10.iimage.su/s/20/th_up07raIxkO6kXaAPMzNiKR5yRcz1F18ahsR7lcdFy.jpg"
              alt="Фото с нашей свадьбы"
              className="heart-photo"
            />
          </div>

          <div className="photo-title">Фото с нашей свадьбы</div>

          <div className="divider" />

          <div className="greeting">
            Уважаемые гости праздника,<br />приглашаем вас посмотреть наши первые фото ✨
          </div>

          <div className="main-message">
            Жмите на кнопку ниже, чтобы перейти в беседу ВК
          </div>

          <div style={{ fontSize: "1.8rem", animation: "bounce 1s infinite", display: "inline-block", marginBottom: "4px", opacity: 0.5 }}>
            ↓
          </div>

          <br />

          <a
            href="https://vk.me/join/rXpytT2yZVmRLULQPF9Wwsjj4s7YiDLrHlA="
            target="_blank"
            rel="noopener noreferrer"
            className="photo-button"
          >
            ♥ ЖМИ
          </a>

          <div className="divider" />

          <div className="love-footer">
            Мы любим вас ♥
          </div>

          <div className="hint">нажми на кнопку выше</div>
        </div>
      </div>
    </>
  )
}

export default Index
