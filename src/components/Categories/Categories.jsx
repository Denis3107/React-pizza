import React, {useState} from 'react';

const Categories = ({items}) => {

    const [activeItem, SetItem] = useState(null)

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? "active":""} onClick={()=>{SetItem(null)}}>Все</li>
                {
                    items && items.map((item, index) => (<li key = {`${item}_${index}`} className={activeItem === index? "active":""} onClick={()=>{SetItem(index)}}>{item}</li>))
                }
            </ul>
        </div>
    );
};

export default Categories;