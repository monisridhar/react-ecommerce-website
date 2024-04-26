import Footer from "./Footer";
import Hero from "./Hero";
import NewCollections from "./NewCollections";
import NewsLetter from "./NewsLetter";
import Offers from "./Offers";
import Popular from "./Popular";

function Shop(){
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
        </div>
    )
}



export default Shop;