import React from 'react';

const ReviewItem = (props) => {
  //  console.log(props.product);
      const {name, quantity,key, price} = props.product;
    return (
        <div  className="review-item">
            <h4 className="product-name">product name{name}</h4>
            <p>quantity:{quantity}</p>
            <p>  <small>${price} </small> </p>
            <button className="main-button"
            
            onClick={() => props.removeProduct(key)}
            
            >
                
                
                Remove</button>
        </div>
    );
};

export default ReviewItem;