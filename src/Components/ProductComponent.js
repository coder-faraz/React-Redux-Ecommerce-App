
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const ProductComponent = () => {

    const products = useSelector((state) => state.allProducts.products);

    const productsList = products.map((product) => {
      const {id, title, image, price, category} = product;
      return (
        <div className='four wide column' key={ id }>
          <Link to={`/product/${id}`} >
          <div className='ui link cards'>
            <div className='card' style={{height: "60vh"}}>
                <div className='image' style={{margin: "20px"}}>
                  <img src={ image } alt={ title } style={{height: "35vh"}} />
                </div>
                <div className='content'>
                  <div className='header'> { title.length>0 ? title.slice(0, 49) : ''}.. </div>
                  <div className='meta price' style={{ fontWeight: "bold", fontStyle: "italic", color: "black"}}> ${ price } </div>
                  <div className='meta'> { category } </div>
                </div>
            </div>
          </div>
          </Link>
        </div>
        )
    })

    return <> { productsList } </>
}


export default ProductComponent;
