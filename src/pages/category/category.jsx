import React from "react"
import { useParams } from "react-router-dom"
import useGetSingleCategory from "./service/query/useGetSingleCategory"
import ProductCard from "../../components/card/product-card/product-card"


const Category = () => {
  const {slug} = useParams()
  const {data, isLoading} = useGetSingleCategory(slug)
  console.log(data)
  console.log(slug)
  return (
    <div className="container">
        <div className="grid grid-cols-4 gap-3">
      {data?.map((item)=> 
      <ProductCard {...item}
        key={item.id}
      />)}
    </div>
    </div>
  )
}

export default Category
