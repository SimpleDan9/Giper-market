
function ProductCard({img,title,color,price,id}) {
  return (
    <div>
      <div>
       <img src={img} alt="" />
      </div>
       <div>
        <h2>{title}</h2>
        <strong>{price}</strong>
       </div>
    </div>
  );
}

export default ProductCard;
