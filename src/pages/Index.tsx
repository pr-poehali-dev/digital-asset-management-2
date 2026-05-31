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
        padding: "48px 20px 48px",
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
          marginBottom: "16px",
          lineHeight: "1.4",
        }}
      >
        Мы приглашаем вас на свадьбу
      </motion.h1>

      {/* Дата — жирная, крупная */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        style={{
          fontSize: "clamp(36px, 9vw, 72px)",
          color: "#7d5a6a",
          letterSpacing: "0.08em",
          marginBottom: "40px",
          fontWeight: "700",
          lineHeight: "1",
        }}
      >
        08.08.2026
      </motion.p>

      {/* Три фото в ряд */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        style={{
          display: "flex",
          gap: "clamp(8px, 2vw, 20px)",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "36px",
          width: "100%",
          maxWidth: "700px",
        }}
      >
        {/* Левое фото */}
        <div
          style={{
            borderRadius: "50%",
            overflow: "hidden",
            width: "clamp(90px, 22vw, 200px)",
            height: "clamp(90px, 22vw, 200px)",
            boxShadow: "0 6px 30px rgba(180, 140, 160, 0.25)",
            border: "4px solid rgba(255,255,255,0.8)",
            flexShrink: 0,
          }}
        >
          <img
            src="https://s10.iimage.su/s/31/uNJQ9gwxeJ7cSYX3LWHJVktqbyFhz11Oz4Nq0v0pv.jpg"
            alt="Фото"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Центральное фото — чуть крупнее */}
        <div
          style={{
            borderRadius: "50%",
            overflow: "hidden",
            width: "clamp(120px, 30vw, 260px)",
            height: "clamp(120px, 30vw, 260px)",
            boxShadow: "0 10px 50px rgba(180, 140, 160, 0.4)",
            border: "6px solid rgba(255,255,255,0.9)",
            flexShrink: 0,
          }}
        >
          <img
            src="https://s10.iimage.su/s/31/uAkccZPxVZvDJzziZQMzizY3Cvl9rZPsCbGM0gwr8.jpg"
            alt="Артём и Милана"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Правое фото */}
        <div
          style={{
            borderRadius: "50%",
            overflow: "hidden",
            width: "clamp(90px, 22vw, 200px)",
            height: "clamp(90px, 22vw, 200px)",
            boxShadow: "0 6px 30px rgba(180, 140, 160, 0.25)",
            border: "4px solid rgba(255,255,255,0.8)",
            flexShrink: 0,
          }}
        >
          <img
            src="https://s10.iimage.su/s/31/uT8ybuOxlnKngTFM9BdXCcgsviWYUWoJ4TQNIqRTI.jpg"
            alt="Фото"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </motion.div>

      {/* Имена */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.8 }}
        style={{
          fontSize: "clamp(28px, 6vw, 50px)",
          fontStyle: "italic",
          fontWeight: "400",
          color: "#7d5a6a",
          letterSpacing: "0.04em",
          marginBottom: "32px",
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
          lineHeight: "2",
          fontSize: "clamp(14px, 3vw, 17px)",
          marginBottom: "24px",
          letterSpacing: "0.02em",
        }}
      >
        <p style={{ margin: "0 0 4px" }}>
          <strong style={{ fontWeight: "600", color: "#7d5a6a" }}>Адрес:</strong> Парк-Отель «Карповка»
        </p>
        <p style={{ margin: "0 0 4px" }}>Карагайский Муниципальный округ, д. Карповка</p>
        <p style={{ margin: 0 }}>
          <strong style={{ fontWeight: "600", color: "#7d5a6a" }}>Начало:</strong> 16:00
        </p>
      </motion.div>

      {/* Важная информация */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.15 }}
        style={{
          background: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          border: "1px solid rgba(201, 168, 184, 0.35)",
          padding: "24px 32px",
          textAlign: "center",
          color: "#8a6575",
          fontSize: "clamp(13px, 2.8vw, 16px)",
          marginBottom: "40px",
          maxWidth: "420px",
          lineHeight: "1.8",
          width: "100%",
        }}
      >
        <p style={{ margin: "0 0 10px", fontWeight: "600", color: "#7d5a6a", fontSize: "clamp(15px, 3vw, 18px)" }}>
          Важная информация для гостей
        </p>
        <p style={{ margin: 0 }}>
          <strong style={{ color: "#7d5a6a" }}>Дресс-код:</strong> пастельные тона 🌸
        </p>
      </motion.div>

      {/* Кнопка ВК */}
      <motion.a
        href="https://vk.me/join/_J6hCy6ftVL_d8l3ZmlFad7cLtvKbaVaCPg="
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.3 }}
        whileHover={{ scale: 1.05, boxShadow: "0 14px 44px rgba(180, 130, 155, 0.5)" }}
        whileTap={{ scale: 0.97 }}
        style={{
          display: "inline-block",
          padding: "16px 52px",
          background: "linear-gradient(135deg, #c9a8b8, #b890a8)",
          color: "#fff",
          borderRadius: "50px",
          textDecoration: "none",
          fontSize: "clamp(15px, 3vw, 18px)",
          letterSpacing: "0.08em",
          fontFamily: "'Georgia', serif",
          fontStyle: "italic",
          boxShadow: "0 6px 28px rgba(180, 130, 155, 0.35)",
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
        transition={{ duration: 1.2, delay: 1.5 }}
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