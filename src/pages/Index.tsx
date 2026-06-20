import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Heart {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  emoji: string;
}

const EMOJIS = ["❤️", "🩷", "💕", "💖", "💗", "🤍", "💝"];

function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const initial: Heart[] = Array.from({ length: 14 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 18 + Math.random() * 22,
      duration: 5 + Math.random() * 6,
      delay: Math.random() * 5,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
    }));
    setHearts(initial);

    const interval = setInterval(() => {
      setHearts((prev) => {
        const next: Heart = {
          id: Date.now(),
          x: Math.random() * 100,
          size: 18 + Math.random() * 22,
          duration: 5 + Math.random() * 6,
          delay: 0,
          emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        };
        return [...prev.slice(-18), next];
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      <AnimatePresence>
        {hearts.map((h) => (
          <motion.div
            key={h.id}
            initial={{ y: "110vh", x: `${h.x}vw`, opacity: 0, scale: 0.5 }}
            animate={{ y: "-10vh", opacity: [0, 0.85, 0.85, 0], scale: [0.5, 1, 1, 0.7] }}
            exit={{ opacity: 0 }}
            transition={{ duration: h.duration, delay: h.delay, ease: "easeInOut" }}
            style={{ position: "absolute", fontSize: h.size, lineHeight: 1 }}
          >
            {h.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

const Index = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Great+Vibes&display=swap');

        .wedding-body {
          min-height: 100vh;
          background: linear-gradient(135deg, #fff0f5 0%, #ffe4f0 40%, #ffd6e8 70%, #fff0fa 100%);
          font-family: 'Playfair Display', 'Georgia', serif;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        .invitation-card {
          position: relative;
          z-index: 10;
          max-width: 600px;
          width: 100%;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(12px);
          border-radius: 48px;
          border: 2px solid rgba(255, 180, 210, 0.5);
          box-shadow:
            0 30px 60px -15px rgba(220, 80, 130, 0.2),
            0 0 0 1px rgba(255,255,255,0.9),
            inset 0 1px 0 rgba(255,255,255,1);
          padding: 2.8rem 2.4rem 3rem;
          text-align: center;
        }

        .photo-title {
          font-family: 'Great Vibes', cursive;
          font-size: clamp(2rem, 6vw, 3rem);
          color: #c2185b;
          margin-bottom: 0.4rem;
          line-height: 1.2;
        }

        .photo-subtitle {
          font-size: clamp(0.85rem, 2.5vw, 1rem);
          color: #e91e8c;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 1.6rem;
          opacity: 0.7;
        }

        .greeting {
          font-size: clamp(1rem, 2.8vw, 1.15rem);
          color: #7b3a60;
          margin-bottom: 1.4rem;
          line-height: 1.7;
          font-style: italic;
        }

        .main-message {
          font-size: clamp(0.95rem, 2.5vw, 1.1rem);
          color: #9e4a78;
          margin: 0 0 1.6rem;
          line-height: 1.6;
        }

        .photo-button {
          display: inline-block;
          background: linear-gradient(135deg, #f06292, #e91e8c, #c2185b);
          padding: 18px 52px;
          border-radius: 80px;
          box-shadow: 0 12px 32px -8px rgba(194,24,91,0.55), 0 4px 12px rgba(240,98,146,0.3);
          text-decoration: none;
          font-size: clamp(1.3rem, 4vw, 1.8rem);
          font-weight: bold;
          color: #ffffff;
          margin: 14px 0;
          letter-spacing: 4px;
          transition: all 0.25s ease;
          font-family: 'Playfair Display', 'Georgia', serif;
        }

        .photo-button:hover {
          background: linear-gradient(135deg, #f48fb1, #f06292, #e91e8c);
          transform: scale(1.05);
          box-shadow: 0 18px 40px -8px rgba(194,24,91,0.6);
          color: #ffffff;
        }

        .photo-button:active {
          transform: scale(0.97);
        }

        .love-footer {
          margin-top: 1.8rem;
          font-family: 'Great Vibes', cursive;
          font-size: clamp(1.5rem, 4vw, 2rem);
          color: #e91e8c;
        }

        .hint {
          margin-top: 10px;
          font-size: 0.82rem;
          color: #d48cad;
          letter-spacing: 1px;
        }

        .heart-photo-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 1.6rem;
        }

        .heart-photo {
          width: 170px;
          height: 170px;
          object-fit: cover;
          clip-path: path('M85 145 C85 145 12 96 12 48 C12 24 30 6 54 6 C67 6 80 14 85 24 C90 14 103 6 116 6 C140 6 158 24 158 48 C158 96 85 145 85 145Z');
          filter: drop-shadow(0 6px 20px rgba(220, 80, 130, 0.4));
          display: block;
        }

        .divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin: 1.2rem 0;
          color: #f48fb1;
          font-size: 1rem;
          opacity: 0.7;
        }
        .divider::before, .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, #f48fb1, transparent);
        }
      `}</style>

      <div className="wedding-body">
        <FloatingHearts />

        <motion.div
          className="invitation-card"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="heart-photo-wrap">
            <motion.img
              src="https://s10.iimage.su/s/20/th_up07raIxkO6kXaAPMzNiKR5yRcz1F18ahsR7lcdFy.jpg"
              alt="Фото с нашей свадьбы"
              className="heart-photo"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "backOut" }}
            />
          </div>

          <div className="photo-title">Фото с нашей свадьбы</div>
          <div className="photo-subtitle">— с любовью для вас —</div>

          <div className="divider">❤️</div>

          <div className="greeting">
            Дорогие гости,<br />
            приглашаем вас посмотреть наши первые фото ✨
          </div>

          <div className="main-message">
            Жмите на кнопку и переходите в нашу беседу ВК
          </div>

          <motion.div
            style={{ fontSize: "1.8rem", display: "inline-block", marginBottom: "6px" }}
            animate={{ y: [0, 9, 0] }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          >
            💕
          </motion.div>

          <br />

          <motion.a
            href="https://vk.me/join/rXpytT2yZVmRLULQPF9Wwsjj4s7YiDLrHlA="
            target="_blank"
            rel="noopener noreferrer"
            className="photo-button"
            whileTap={{ scale: 0.95 }}
          >
            ❤️ ЖМИ
          </motion.a>

          <div className="divider">💖</div>

          <div className="love-footer">Мы любим вас!</div>

          <div className="hint">нажми на кнопку выше</div>
        </motion.div>
      </div>
    </>
  );
};

export default Index;
