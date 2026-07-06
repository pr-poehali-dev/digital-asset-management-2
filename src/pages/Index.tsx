import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Balloon {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  emoji: string;
  side: "left" | "right";
}

const EMOJIS = ["🎈", "🎈", "🎈", "🌿", "🍃", "🌻", "✨"];

function FloatingBalloons() {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    const initial: Balloon[] = Array.from({ length: 14 }, (_, i) => ({
      id: i,
      x: Math.random() < 0.5 ? Math.random() * 12 : 88 + Math.random() * 12,
      size: 22 + Math.random() * 26,
      duration: 6 + Math.random() * 6,
      delay: Math.random() * 5,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      side: Math.random() < 0.5 ? "left" : "right",
    }));
    setBalloons(initial);

    const interval = setInterval(() => {
      setBalloons((prev) => {
        const side = Math.random() < 0.5 ? "left" : "right";
        const next: Balloon = {
          id: Date.now(),
          x: side === "left" ? Math.random() * 12 : 88 + Math.random() * 12,
          size: 22 + Math.random() * 26,
          duration: 6 + Math.random() * 6,
          delay: 0,
          emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
          side,
        };
        return [...prev.slice(-18), next];
      });
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      <AnimatePresence>
        {balloons.map((b) => (
          <motion.div
            key={b.id}
            initial={{ y: "110vh", x: `${b.x}vw`, opacity: 0, scale: 0.5, rotate: -8 }}
            animate={{ y: "-15vh", opacity: [0, 0.9, 0.9, 0], scale: [0.5, 1, 1, 0.7], rotate: [-8, 8, -8] }}
            exit={{ opacity: 0 }}
            transition={{ duration: b.duration, delay: b.delay, ease: "easeInOut" }}
            style={{ position: "absolute", fontSize: b.size, lineHeight: 1 }}
          >
            {b.emoji}
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

        .grad-body {
          min-height: 100vh;
          background: linear-gradient(135deg, #fffdf0 0%, #f3ffe9 35%, #e8f8d8 70%, #fffbe0 100%);
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
          max-width: 620px;
          width: 100%;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          border-radius: 40px;
          border: 2px solid rgba(196, 222, 130, 0.5);
          box-shadow:
            0 30px 60px -15px rgba(120, 160, 60, 0.2),
            0 0 0 1px rgba(255,255,255,0.9),
            inset 0 1px 0 rgba(255,255,255,1);
          padding: 2.6rem 2.2rem 2.8rem;
          text-align: center;
        }

        .grad-title {
          font-family: 'Great Vibes', cursive;
          font-size: clamp(2.2rem, 7vw, 3.4rem);
          background: linear-gradient(135deg, #6a9a2d, #a8c94a, #e0c020);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 1.4rem;
          line-height: 1.2;
        }

        .grad-photo-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 1.6rem;
        }

        .grad-photo {
          width: 100%;
          max-width: 420px;
          height: 300px;
          object-fit: cover;
          border-radius: 24px;
          filter: drop-shadow(0 10px 24px rgba(120, 160, 60, 0.35));
          border: 4px solid #fff;
          display: block;
        }

        .divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin: 1.4rem 0;
          color: #a8c94a;
          font-size: 1rem;
          opacity: 0.8;
        }
        .divider::before, .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, #c4de82, transparent);
        }

        .grad-message {
          font-size: clamp(1rem, 2.8vw, 1.15rem);
          color: #5c7a2e;
          margin: 0 0 1.6rem;
          line-height: 1.7;
        }

        .grad-button {
          display: inline-block;
          background: linear-gradient(135deg, #a8c94a, #7fb238, #6a9a2d);
          padding: 18px 52px;
          border-radius: 80px;
          box-shadow: 0 12px 32px -8px rgba(106,154,45,0.5), 0 4px 12px rgba(168,201,74,0.3);
          text-decoration: none;
          font-size: clamp(1.2rem, 4vw, 1.6rem);
          font-weight: bold;
          color: #ffffff;
          margin: 14px 0;
          letter-spacing: 3px;
          transition: all 0.25s ease;
          font-family: 'Playfair Display', 'Georgia', serif;
        }

        .grad-button:hover {
          background: linear-gradient(135deg, #b8d968, #a8c94a, #7fb238);
          transform: scale(1.05);
          box-shadow: 0 18px 40px -8px rgba(106,154,45,0.55);
          color: #ffffff;
        }

        .grad-button:active {
          transform: scale(0.97);
        }

        .grad-footer {
          margin-top: 1.8rem;
          font-family: 'Great Vibes', cursive;
          font-size: clamp(1.4rem, 4vw, 1.8rem);
          color: #e0b020;
        }

        .photographer {
          margin-top: 12px;
          font-size: 0.78rem;
          color: #a3b87a;
          letter-spacing: 1px;
          font-style: italic;
        }
      `}</style>

      <div className="grad-body">
        <FloatingBalloons />

        <motion.div
          className="invitation-card"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grad-title">Наша свадьба</div>

          <div className="grad-photo-wrap">
            <motion.img
              src="https://s6.iimage.su/s/06/uxqQxWjxmzB0Ne4HS4qcSadkUMzgZly8bhSLobFo8.jpg"
              alt="Свадебное фото"
              className="grad-photo"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "backOut" }}
            />
          </div>

          <div className="divider">🌿</div>

          <div className="grad-message">
            Уважаемые гости! Приглашаю вас окунуться в историю любви Александры и Дарьи — прямо сейчас мы откроем их первый свадебный альбом.
            А вы тоже можете стать частью этого вечера: загружайте свои фото и пополняйте наш общий банк воспоминаний.
            Пусть этот день останется с нами навсегда! 💍📸
          </div>

          <motion.div
            style={{ fontSize: "1.8rem", display: "inline-block", marginBottom: "6px" }}
            animate={{ y: [0, 9, 0] }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          >
            🌻
          </motion.div>

          <br />

          <motion.a
            href="https://vk.me/join/eFld3UKtQotD1RM1TSClNGddC6_/uHzRiBM="
            target="_blank"
            rel="noopener noreferrer"
            className="grad-button"
            whileTap={{ scale: 0.95 }}
          >
            🌿 ЖМИ
          </motion.a>

          <div className="divider">🎓</div>

          <div className="grad-footer">Спасибо, что вы с нами!</div>

          <div className="photographer">фотограф Наталья Широкова</div>
        </motion.div>
      </div>
    </>
  );
};

export default Index;