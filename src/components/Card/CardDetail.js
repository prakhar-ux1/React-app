import React, { useState } from 'react'
import Loader from '../Loader/Loader';
import "../../styles/CardDetail.scss"
import { useLocation } from 'react-router-dom';
function CardDetail(props) {
    const [isLoading, setLoading] = useState(false);
    const location = useLocation();
    const data = location.state
    return (
        <>
            {isLoading ? (<> <Loader /></>) : (<div className='cardItem_Container'>
                <div className='cardItem_Heading'>Card Details</div>
                <div className='image'>
                    <img className="avtar" src={data.thumbnailUrl} alt="Card " />
                </div>
                <div className='cardItem_Content'>

                    <div className='cardItem_Title'>{data.title}
                    </div>
                    <div className='cardItem_Detail'>Ablum Id: {data.albumId}</div>
                </div>
            </div>)
            }</>
    )
}

export default CardDetail