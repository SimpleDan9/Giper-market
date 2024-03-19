import Buttons from "./components/buttons/buttons";
import Search from "./components/search/search";
import logo from "../../assets/images/logo.svg"
import Button from "../../components/ui/button";

function Header() {
  return (
   <div className="container">
    <div className="flex justify-end gap-[24px] py-2">
      
          <p>Доставка и оплата</p>
          <p>Пункты выдачи</p>
          <p>Поддержка</p>
          <p>+998 90 253 77 53</p>
     
    </div>
    <div className="flex justify-between items-center py-[17px]">
    <div className="flex items-center">
      <a href="#">
        <img src={logo} alt="img" />
      </a>
      <Button variant="primary">Каталог</Button>
    </div>
    <Search/>
    <Buttons/>
    </div>
   </div>
  );
}

export default Header;
