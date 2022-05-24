import "./style.css";
export const Footer = () => {
  return (
    <footer className="container-footer">
      <p className="footer-text">
        Desenvolvido por
        <a className="footer-link"
          href="https://www.linkedin.com/in/lromao/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lidianne Romão
        </a>
        e
        <a className="footer-link"
          href="https://www.linkedin.com/in/taila-martins/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Taila Martins
        </a>
      </p>
    </footer>
  );
};
