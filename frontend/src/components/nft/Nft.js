import React from "react";

const NftItem = (props) => {
    const { name, price, imgpath } = props;
    if (imgpath !== ''){
        return (
            <div className="card">
                <img className="nftimage" alt={name} src={imgpath}/>
                <p>{name}</p>
                <p className="price">$ {price}</p>
            </div>
        );
    } else {
        return (
            <div className="card">
                <img className="nftimage" alt={name} src='img/coin.png'/>
                <p>{name}</p>
                <p className="price">$ {price}</p>
            </div>
        );
    }
}

export default NftItem;