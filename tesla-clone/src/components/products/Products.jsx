import React from 'react';
import Product from '../product/Product';
import './Products.css'
import image1 from '..//../assets/cybertruck.jpeg'
import image2 from '..//../assets/model-x.jpeg'
import image3 from '..//../assets/pexels-photo-7985573.jpeg'
import image4 from '..//../assets/modelss.jpeg'
import image5 from '..//../assets/modeld.jpeg'
import image6 from '..//../assets/modelx.jpeg'



const products = [
    {
        id:1,
        image: image1,
        title:'Cybertruck',
        description:'Good Road Master',
        price: 19.9
    },
    {
        id:2,
        image: image2,
        title:'Model X',
        description:'Last Longer',
        price: 15.9
    },
    {
        id:3,
        image: image3,
        title:'Model D',
        description:'So Cool Men',
        price: 20.9
    },
    {
        id:4,
        image: image4,
        title:'Model S 1',
        description:'In The Nist',
        price: 39.9
    },
    {
        id:5,
        image: image5,
        title:'Model KM',
        description:'Anything Goes',
        price: 56.9
    },
    {
        id:6,
        image: image6,
        title:'Model Xs',
        description:'So FLashy Guy',
        price: 59.9
    }
]

export default function Products() {
  return (
    <div className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
}

