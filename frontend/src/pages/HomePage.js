/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `nft`; 
        navigate(path);
    }

    return (
        <main className="home">
            <div className="topbanner">
                <h2>Discover the Most Premium, Unique and Exclusive NFT Collections</h2>
                <img src="img/nftitle.png"/>
            </div>
            <h2>Top NFTs found this month</h2>
            <div className="nftsRow">
                <div className="card">
                    <img className="nftimage" src="img/nft1.png"/>
                    <p>Punk Cat</p>
                    <p className="price">$1200</p>
                </div>
                <div className="card">
                    <img className="nftimage" src="img/nft2.png"/>
                    <p>Pharaoh Cat</p>
                    <p className="price">$3100</p>
                </div>
                <div className="card">
                    <img className="nftimage" src="img/nft3.jpeg"/>
                    <p>Deep in space</p>
                    <p className="price">$500</p>
                </div>
                <div className="card">
                    <img className="nftimage" src="img/nft4.jpg"/>
                    <p>Honey Shot</p>
                    <p className="price">$120</p>
                </div>
            </div>
            <button onClick={routeChange} >BUY NOW</button>
        </main>
    );
}

export default HomePage;