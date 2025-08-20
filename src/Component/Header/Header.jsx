import Profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center border-b-1 mt-10 ml-40 mr-40">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src={Profile} alt="" />
    </div>
  );
};

export default Header;
