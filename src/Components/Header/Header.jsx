import "./Header.css"
import profile from "../../assets/images/profile.png"

const Header = () => {
    return (
        <div className="flex justify-between m-4 p-4 border-b-2">
            <h1 className='text-6xl '>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;