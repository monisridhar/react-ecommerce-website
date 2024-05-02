import { useContext } from "react";
import { ShopContext } from "./ShopContext";
import Breakcrum from "./Breakcrum";
import {useParams} from 'react-router-dom';
import ProductDisplay from "./ProductDisplay";
import DescriptionBox from "./DescriptionBox";
import Relatedproducts from "./RelatedProducts";


function Product(){

    const {all_product}=useContext(ShopContext);
    const {productId}=useParams();
    const product=all_product.find((e)=>e.id===Number(productId))
    return(
        <div>
            <Breakcrum product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox />
            <Relatedproducts/>
            <br />

        </div>
    )
}

export default Product;