import React, {useState} from 'react';
import {connect} from "react-redux";
import {setCategoryAction, setSortAction} from "../../Redux/Redusers/sortReduser";

const Categories = ({items, setCategoryAction}) => {

    const [activeItem, SetItem] = useState(null)

    function setCategory(index){
        SetItem(index)
        setCategoryAction(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? "active": undefined} onClick={()=>{setCategory(null)}}>Все</li>
                {
                    items && items.map((item, index) => (<li key = {`${item}_${index}`} className={activeItem === index? "active":undefined} onClick={()=>{setCategory(index)}}>{item}</li>))
                }
            </ul>
        </div>
    );
};

let mapStateToProps = (state) => ({
    sort: state.sort
})

export default connect(mapStateToProps,{setCategoryAction})(Categories) ;