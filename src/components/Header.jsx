import { DropdownItem } from "./DropdownItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo-nobg.png";
import logoLetra from "../assets/logo-texto-nobg.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="font-myFont flex items-center justify-between p-4 bg-gray-800 text-black h-[56px]  h-max-[56px] text-white bg-principal w-[100%] mx-auto lg:w-[80%] lg:h-[92px] lg:h-max-[92px]">
      <div className="flex flex-row">
        <img
          className="h-[33px] lg:h-[66px] object-contain"
          src={logo}
          alt="Logo"
        />
        <img
          className="h-[33px] lg:h-[66px] object-contain"
          src={logoLetra}
          alt="LogoLetra"
        />
      </div>
      <div>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="hidden justify-around w-[550px] font-bold lg:flex">
        <DropdownItem title="Products  " />
        <DropdownItem title="Solutions  " />
        <DropdownItem title="Resources  " />
        <DropdownItem title="Pricing  " />
      </div>
      <div className="hidden space-x-4 text-[18px] font-normal lg:flex">
        <button className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded h-[60px] w-[126px] bg-buttonLogin text-principal">
          Login
        </button>
        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded h-[60px] w-[227px] bg-buttonTry">
          Try Whitespace Free
        </button>
      </div>
    </header>
  );
}

export default Header;
