import React, { useEffect, useState } from "react";
import axios from "axios";
import NftItem from "../components/nft/Nft";

const NftPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [nft, setNft] = useState([]);

    useEffect(() => {
        const loadNft = async () => {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/nft`);
            setNft(response.data);
            setLoading(false);
        };
        loadNft();
    }, []);

    return (
        <main>
            <div className="nfts">
                {
                    loading ? (<p>Loading...</p>) : (
                        nft.map(item => <NftItem key={item.id}
                            name={item.name} price={item.price}
                            imgpath={item.imgpath}
                        />
                        )
                    )}

            </div>
        </main>
    );
}

export default NftPage;