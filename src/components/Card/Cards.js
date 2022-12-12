import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../services/actions/index';
import { getCardListAPI, removeItem, sortByAsc, sortByDesc, modifyItem, addItem, sortById } from "../../redux/cardSlice"
import Modal from '../Modal';
import CardItemModify from './CardItemModify';
import Loader from '../Loader/Loader';
import '../../styles/Card.scss';
import CardItem from './CardItem'
function Cards() {
    const sas = useSelector(state => state.card.cardList);
    let cardResponse;
    const [dataList, setSortList] = useState([]);
    const [isOpenedModal, setOpenedModal] = useState(false);

    const [isLoading, setLoading] = useState(false);
    const callDescSort = () => {
        dispatch(sortByDesc());
    }
    const callAscSort = () => {
        dispatch(sortByAsc());

    }
    const callIDSort = () => {
        dispatch(sortById());
    }

    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const [isEmpty, setEmpty] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        setValue("");
    };
    useEffect(() => {
        (
            async () => {
                setLoading(true);
                cardResponse = await actions.getCards();
                // call action to store data from api
                dispatch(getCardListAPI(cardResponse.data.slice(0, 20)));
                setLoading(false);
            }

        )();

    }, []);
    useEffect(() => {
        if (dataList.length == 0)
            setEmpty(true);
        else
            setEmpty(false);
    }, [dataList])

    useEffect(() => {
        setSortList(sas);
    }, [sas])

    const deleteItem = (index) => {
        //delete that item
        dispatch(removeItem(index));


    }
    const handleSearch = (e) => {
        setValue(e.target.value);
        let temp = [...sas];
        let match = temp.filter((element) => {
            return element.title.toLowerCase().startsWith(e.target.value.toLowerCase())
        })

        setSortList(match);

    }
    const updateItem = (data) => {
        dispatch(modifyItem(data));
    }
    const addCardItem = (data) => {
        dispatch(addItem(data));
    }
    const [sortOrder, setSortOrder] = useState(0);
    const handleSort = () => {
        if (sortOrder == 0) {
            callAscSort();
            setSortOrder(1);
        }
        else if (sortOrder == 1) {
            callDescSort();
            setSortOrder(-1);
        }
        else {
            callIDSort();
            setSortOrder(0);
        }
    }


    return (
        <div className='container'>
            <div className='modifyList'>
                <div className='modifyList_Title'>Card List</div>
                <div className='modifyList_Icons' onClick={handleSort}>
                    {sortOrder === 0 ?
                        <><i className="fa fa-caret-up" aria-hidden="true"></i>
                            <i className="fa fa-caret-down" aria-hidden="true"></i></>
                        : (sortOrder === 1) ? (<i className="fa fa-caret-up" aria-hidden="true"></i>) :
                            (<i className="fa fa-caret-down" aria-hidden="true"></i>)
                    }
                </div>
                <form className="modifyList_Form"
                    onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="modifyList_Form_Input"
                        value={value}
                        placeholder={"Search by title"}
                        onChange={handleSearch}
                    />
                </form>
            </div>
            <div className='cards_Container'>
                <div clasName='emptyList' style={{ 'display': `${!isEmpty ? "none" : "block"}` }}
                ><span>No Card is present</span></div>
                {isLoading ? (<Loader />) :
                    (dataList.map((element) => {
                        return (<CardItem key={element.id}
                            index={element.id}
                            data={element}
                            deleteItem={deleteItem}
                            updateItem={updateItem} />);
                    }))
                }
            </div>
            <i class="fa fa-plus bottom_right" onClick={() => setOpenedModal(true)} aria-hidden="true"></i>
            <Modal
                open={isOpenedModal}
                close={() => setOpenedModal(false)}>
                <CardItemModify
                    actionType={"Add"}
                    newId={dataList.length + 1}
                    onClose={() => setOpenedModal(false)}
                    onSave={addCardItem}
                />

            </Modal>


        </div >
    );
}
export default Cards