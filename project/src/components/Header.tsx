import NetflixLogo from "../assets/Netflix_Logo_PMS.png";

const Header = () => {
    return (
        <div className="absolute z-10 w-36 bg-gradient-to-t from-black to-transparent px-4 py-2">
            <img src={NetflixLogo} alt="netflix logo"/>
        </div>
    )
}

export default Header;