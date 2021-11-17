import React, {useEffect, useRef, useState} from 'react';
import {connect} from "react-redux";
import {setSortAction} from "../../Redux/Redusers/sortReduser";

const Sort = ({items,setSortAction}) => {
    const [activePopup, setActive] = useState(false)
    const [activeItem, SetItem] = useState(0)
    const element = useRef()
    const activeLabel = items[activeItem].name

    useEffect(()=>{
        document.body.addEventListener("click", clickBody)
    },[])

    function clickBody(event){
        if(!event.path.includes(element.current)){
            onClickPopUp(false)
        }

    }

    function onClickItem(index, type){
        SetItem(index)
        onClickPopUp(false)
        setSortAction(type)
    }

    function onClickPopUp(status){
        setActive(status)
    }

    return (
        <div className="sort" ref = {element}>
            <div className="sort__label">
                <svg className={activePopup ? "rotated":undefined}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={()=> onClickPopUp(!activePopup)}>{activeLabel}</span>
            </div>
            {activePopup &&
            <div className="sort__popup">
                <ul>
                    {
                        items && items.map((item, index) => (<li key = {`${item}_${index}`} className={activeItem === index? "active":undefined}
                                                                 onClick={()=> onClickItem(index, item)}>{item.name}</li>))
                    }
                </ul>
            </div>}
        </div>
    );
};

let mapStateToProps = (state) => ({
    sort: state.sort
})
export default connect(mapStateToProps,{setSortAction})(Sort) ;