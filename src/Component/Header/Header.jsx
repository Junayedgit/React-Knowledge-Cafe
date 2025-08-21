import Profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center border-b-1 mb-8 md:flex max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src={Profile} alt="" />
    </div>
  );
};

export default Header;
