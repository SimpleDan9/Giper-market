import Banner from "../../layout/header/components/banner/banner";
import useGetNewProduct from "./service/query/useGetNewProduct";
import ProductBanner from "../../components/slider/product-banner/product-banner";
import ProductCard from "../../components/card/product-card/product-card";

function Home() {

  const {data, isLoading} = useGetNewProduct("phones");
  const {data:data2, isLoading:isLoading2} = useGetNewProduct("notebook");
  
  return (
    <div>
      <Banner/>
      <div className="container">
      <ProductBanner>
        {data?.map((item)=> <ProductCard key={item.id} {...item}/>)}
      </ProductBanner>
      <h2>Notebooks</h2>
      <ProductBanner>
        {data2?.map((item)=> <ProductCard key={item.id} {...item}/>)}
      </ProductBanner>
      </div>
    </div>
  )
}

export default Home;
