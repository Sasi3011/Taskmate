import Logo from "../assets/icon.png";

export const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="Taskmate Logo" />
            <span>TaskMate</span>
        </div>
    </header>
  )
}
