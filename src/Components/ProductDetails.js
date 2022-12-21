
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../Redux/actions/ProductActions';
import Spinner from './Spinner';
import axios from 'axios';


const ProductDetails = () => {

    //obtaining dynamic params(productId) from current URL using useParams() of react-router-dom
    const { productId } = useParams();
    //dispatching the response of network call by axios to the reducer
    const dispatch = useDispatch();
    //grabbing updated value from the redux store
    const productDetails = useSelector((state) => state.productDetails);
      const {image, title, description, price, category} = productDetails;


    const getProductBasedOnID = async () => {
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((error) => { console.log("An Error Occurred ", error) })
        dispatch(selectedProduct(response.data));
    }


    React.useEffect(() => {
        if(productId !== undefined)  getProductBasedOnID();

        return () => {
            dispatch(removeSelectedProduct());
        }

    }, [productId]);


    return (

    <div className='ui grid container' style={{ margin: "20px" }}>
      { Object.keys(productDetails).length === 0 ? (
        <Spinner /> 
      ) : (
        <div className='ui placeholder segment' style={{ width: "64rem" }}> 
          <div className='ui two column stackable center aligned grid'> 
            <div className='ui vertical divider'></div>
            <div className='middle aligned row'> 
              <div className='column lp'> 
                <img className='ui fluid image' src={ image } alt={ title } />
              </div>
              <div className='column rp'> 
                <h1> { title } </h1>
                <h2>
                  <a className='ui teal tag label'> ${ price } </a>
                </h2>
                <h3 className='ui brown block header'> { category } </h3>
                <p style={{ fontFamily: "verdana" }}> { description } </p>
                <div className='ui vertical animated button' tabIndex="0"> 
                  <div className='hidden content'> 
                    <i className='shop icon'> </i>
                  </div>
                  <div className='visible content'> Add To Cart </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      )
    }

    </div>

    )
}

export default ProductDetails;
