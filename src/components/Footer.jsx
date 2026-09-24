export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p>© {year} Vishnu Koushik · Designed &amp; built with <span>♥</span> using React + Vite</p>
    </footer>
  )
}
