import Buttons from "./components/buttons/buttons";
import Search from "./components/search/search";
import logo from "../../assets/images/logo.svg"
import Button from "../../components/ui/button";
import Hamburger from "../../components/ui/hamburger";
import Modal from "../../components/ui/modal/modal";
import useModal from "../../hooks/useModal";
import { Link } from "react-router-dom";
import { useGetCatalog } from "./service/query/useGetCatalog";
import Skeleton from "react-loading-skeleton";


function Header() {
  const {isOpen, close, open} = useModal();
  const {data, isLoading} = useGetCatalog();
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
        {isLoading? (<Skeleton count={7} height={50}/>):
         <div className="grid grid-cols-3 col-gap-[30px] px-5 py-3">
          {data?.map((item)=>(
            <Link className="text-center flex flex-col justify-between" to={`/category/${item.name}`} key={item.id}>
              <img src={item.img} alt="img" />
              <p>{item.text}</p>
            </Link>
          ))}
         </div>
        }
        </Modal>
      <a href="#">
        <img src={logo} alt="img" />
      </a>
      <Button onClick={open} variant="primary" icon={<Hamburger/>}>Каталог</Button>
    </div>
    <Search/>
    <Buttons/>
    </div>
   </div>
  );
}

export default Header;
