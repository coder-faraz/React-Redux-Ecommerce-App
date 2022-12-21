
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../Redux/actions/ProductActions";
import ProductComponent from "./ProductComponent";


const ProductListing = () => {

    const dispatch = useDispatch();

    const getAllProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((error) => { console.log("An Error Occurred ", error) });

        dispatch(setProducts(response.data));
    }


    useEffect(() => {
        getAllProducts();
    }, [])


    return (

    <div className="ui grid container" style={{ paddingTop: "5.75rem" }}>
        <ProductComponent />
    </div>

    )
}

export default ProductListing;

