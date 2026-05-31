import { motion } from "framer-motion"

const Index = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fdf6f0 0%, #f9ede6 30%, #f3e8f0 60%, #ede8f5 100%)",
        fontFamily: "'Georgia', serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "48px 20px 40px",
        boxSizing: "border-box",
      }}
    >
      {/* Декоративная линия сверху */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          width: "120px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, #c9a8b8, transparent)",
          marginBottom: "32px",
        }}
      />

      {/* Заголовок */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        style={{
          fontSize: "clamp(22px, 5vw, 38px)",
          fontWeight: "400",
          color: "#7d5a6a",
          textAlign: "center",
          letterSpacing: "0.06em",
          marginBottom: "12px",
          lineHeight: "1.4",
        }}
      >
        Мы приглашаем вас на свадьбу
      </motion.h1>

      {/* Дата */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        style={{
          fontSize: "clamp(18px, 4vw, 28px)",
          color: "#a07880",
          letterSpacing: "0.12em",
          marginBottom: "36px",
          fontWeight: "300",
        }}
      >
        08 · 08 · 2026
      </motion.p>

      {/* Фото */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        style={{
          borderRadius: "50%",
          overflow: "hidden",
          width: "clamp(220px, 50vw, 320px)",
          height: "clamp(220px, 50vw, 320px)",
          boxShadow: "0 8px 40px rgba(180, 140, 160, 0.3)",
          border: "6px solid rgba(255,255,255,0.8)",
          marginBottom: "32px",
          flexShrink: 0,
        }}
      >
        <img
          src="https://s10.iimage.su/s/31/urZG1CmxLcZcqGOKnVNXLMavJV0mqrPg2y8ob9sgH.jpg"
          alt="Артем и Милана"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </motion.div>

      {/* Имена */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.8 }}
        style={{
          fontSize: "clamp(28px, 6vw, 46px)",
          fontStyle: "italic",
          fontWeight: "400",
          color: "#7d5a6a",
          letterSpacing: "0.04em",
          marginBottom: "36px",
          textAlign: "center",
        }}
      >
        Артём &amp; Милана
      </motion.h2>

      {/* Разделитель */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        style={{
          width: "60px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, #c9a8b8, transparent)",
          marginBottom: "28px",
        }}
      />

      {/* Детали */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.0 }}
        style={{
          textAlign: "center",
          color: "#8a6575",
          lineHeight: "1.9",
          fontSize: "clamp(14px, 3vw, 17px)",
          marginBottom: "16px",
          letterSpacing: "0.02em",
        }}
      >
        <p style={{ margin: "0 0 4px" }}>
          <strong style={{ fontWeight: "600", color: "#7d5a6a" }}>Адрес:</strong> Парк-Отель «Карповка»
        </p>
        <p style={{ margin: "0 0 4px" }}>Карагайский Муниципальный округ, д. Карповка</p>
        <p style={{ margin: "0 0 4px" }}>
          <strong style={{ fontWeight: "600", color: "#7d5a6a" }}>Начало:</strong> 16:00
        </p>
      </motion.div>

      {/* Напитки */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.1 }}
        style={{
          background: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(8px)",
          borderRadius: "16px",
          border: "1px solid rgba(201, 168, 184, 0.3)",
          padding: "20px 28px",
          textAlign: "center",
          color: "#8a6575",
          fontSize: "clamp(13px, 2.8vw, 16px)",
          marginBottom: "16px",
          maxWidth: "400px",
          lineHeight: "1.7",
        }}
      >
        <p style={{ margin: "0 0 6px", fontWeight: "600", color: "#7d5a6a" }}>Наталья, просьба к гостям:</p>
        <p style={{ margin: 0 }}>Пожалуйста, сообщите заранее, кто что будет пить — для удобства организации праздника 🥂</p>
      </motion.div>

      {/* Дресс-код */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.2 }}
        style={{
          textAlign: "center",
          color: "#8a6575",
          fontSize: "clamp(13px, 2.8vw, 16px)",
          marginBottom: "44px",
          letterSpacing: "0.02em",
        }}
      >
        <span style={{ fontWeight: "600", color: "#7d5a6a" }}>Цвет одежды:</span> пастельные тона
      </motion.div>

      {/* Кнопка ВК */}
      <motion.a
        href="https://vk.me/join/_J6hCy6ftVL_d8l3ZmlFad7cLtvKbaVaCPg="
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.4 }}
        whileHover={{ scale: 1.04, boxShadow: "0 12px 40px rgba(180, 130, 155, 0.45)" }}
        whileTap={{ scale: 0.97 }}
        style={{
          display: "inline-block",
          padding: "16px 48px",
          background: "linear-gradient(135deg, #c9a8b8, #b890a8)",
          color: "#fff",
          borderRadius: "50px",
          textDecoration: "none",
          fontSize: "clamp(14px, 3vw, 17px)",
          letterSpacing: "0.08em",
          fontFamily: "'Georgia', serif",
          fontStyle: "italic",
          boxShadow: "0 6px 24px rgba(180, 130, 155, 0.3)",
          cursor: "pointer",
          marginBottom: "48px",
        }}
      >
        Я иду 🌸
      </motion.a>

      {/* Нижняя линия */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.6 }}
        style={{
          width: "80px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, #c9a8b8, transparent)",
        }}
      />
    </main>
  )
}

export default Index