export default function Header() {
  return (
    <div className="header-container">
      <span className="header-name">
        Hugo <br />
        Lansade
      </span>
      <div className="header-ttt-info">
        <img
          src="./img/ttt-logo.svg"
          className="logo-ttt"
          alt="logo-tictactrip"
        />
        <span className="ttt-name">tictactrip</span>
      </div>
    </div>
  );
}
