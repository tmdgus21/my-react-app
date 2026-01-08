import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">Music Archive</div>

      <nav className="header-nav">
        <a href="/">Home</a>
        <a href="#">Archive</a>
        <a href="#">About</a>
        <a href="/login">Login</a>
      </nav>
    </header>
  );
}

export default Header;
