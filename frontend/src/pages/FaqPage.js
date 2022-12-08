import React from "react";


const FaqPage = (props) => {
    return (
        <main>
            <img className="faqimage" alt="" src="img/faqimage.png"/>
            <div className="faqsection">
                <h3>What is a non-fungible token (NFT)?</h3>
                <p>A non-fungible token (NFT) is a cryptographic token that represents a unique asset. They function as verifiable proofs of authenticity and ownership within a blockchain network. NFTs are not interchangeable with each other and introduce scarcity to the digital world.</p>
            </div>
            <div className="faqsection">
                <h3>How do I buy an NFT?</h3>
                <p>For NFTs with a fixed price, click the [Buy] button on the product page and complete the transaction. Once the transaction is successful, we will transfer the NFT to your wallet and the seller will receive the funds. For NFTs on auction, click [Make an offer], place your bid price, and confirm the offer. In the event of someone placing a higher bid than you, your funds will be unlocked. To join the auction again, you’ll have to place a new bid.</p>
            </div>
            <div className="faqsection">
                <h3>How do I sell an NFT?</h3>
                <p>To list an NFT for sale, our team will first of all approve the content to make sure it’s appropriate for listing. This process usually takes 4-8 hours. Upon successful approval, your NFT will list immediately on the Marketplace as either an auction or fixed price sale, according to your preference. Alternatively, you can also choose to list your NFT at a fixed time (with a minimum of 12 hours after approval).</p>
            </div>
            <img className="bottomcoin" alt="" src="img/coin.png"/>
        </main>
    );
}

export default FaqPage;