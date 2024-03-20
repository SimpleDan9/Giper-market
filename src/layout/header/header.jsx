import Buttons from "./components/buttons/buttons";
import Search from "./components/search/search";
import logo from "../../assets/images/logo.svg"
import Button from "../../components/ui/button";
import Hamburger from "../../components/ui/hamburger";
import Modal from "../../components/ui/modal/modal";
import useModal from "../../hooks/useModal";
import { Link } from "react-router-dom";


function Header() {
  const {isOpen, close, open} = useModal();
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
      <Modal close={close} isOpen={isOpen}>
        <Link to="/category/125">category</Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, rem!</p>
        </Modal>
      <a href="#">
        <img src={logo} alt="img" />
      </a>
      <Button onclick={open} variant="primary" icon={<Hamburger/>}>Каталог</Button>
    </div>
    <Search/>
    <Buttons/>
    </div>
   </div>
  );
}

export default Header;
