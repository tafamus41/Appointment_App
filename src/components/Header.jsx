import logo from "../assets/nba-logo.png";

const Header = ({onSearch}) => {

  return (
    <div className="logoandtext">
      <p>
        <img src={logo} alt="" />
      </p>
      <h1 >NBA Legends</h1>
      <input onChange={(e)=>onSearch(e.target.value)} type="search" name="" id="search" placeholder="Search Player..."/>
    </div>
  );
};

export default Header;
