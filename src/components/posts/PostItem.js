import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../../styles/PostItem.scss";
import actions from '../../services/actions';
import Loader from '../Loader/Loader';
function PostItem(props) {
    const { post_id } = useParams();
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState({});
    useEffect(() => {
        // we async call
        (async () => {
            setLoading(true);
            await actions.getPost(post_id).then((response) => {
                setData(response.data);
                setLoading(false);
            });
        })();
    }, []);
    return (
        <>
            {isLoading ? (<> <Loader /></>) : (<div className='postItem_Container'>
                <div className='postItem_Heading'>Post Details</div>
                <div className='postItem_Content'>
                    <div className='postItem_Title'>{data.title}
                    </div>
                    <div className='postItem_Detail'>{data.body}</div>
                </div>
            </div>)
            }
        </>

    )
}

export default PostItem