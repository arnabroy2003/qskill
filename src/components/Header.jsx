import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Qskill</div>
      <nav>
        <Link to="/">Internships</Link>
        <Link to="/verify">Verify</Link>
        <Link to="/">About us</Link>
        <Link to="/">Contact us</Link>
        <Link to="/">Login</Link>
      </nav>
    </header>
  );
}
