import React, { useEffect, useState, useMemo } from 'react'
import PostListItem from './PostListItem.js'
import "../../styles/Posts.scss";
import actions from '../../services/actions/index';
import { useSelector, useDispatch } from 'react-redux';
import { getPostListAPI } from "../../redux/postSlice"
import Pagination from "../Pagination"
import Loader from '../Loader/index.js';
function Posts() {
    let pageSize = 5;
    const [isLoading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const postListState = useSelector(state => state.post.postList);
    let postResponse
    useEffect(() => {
        (
            async () => {
                setLoading(true);
                postResponse = await actions.getPostList();
                // call action to store data from api
                dispatch(getPostListAPI(postResponse.data));
                setLoading(false);
            }

        )();

    }, []);
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return postListState.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, postListState]);

    return (
        <>
            {
                (isLoading && currentTableData.length !== 0) ? <Loader /> : (<><div className='postLists'>
                    {
                        currentTableData.map((element) => {
                            return (<PostListItem id={element.id} key={element.id} title={element.title} body={element.body} />)
                        })
                    }
                </div>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={postListState.length}
                        pageSize={pageSize}
                        onPageChange={page => setCurrentPage(page)}
                    /></>)
            }

        </>
    )
}

export default Posts