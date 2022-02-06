import React from "react";
import { BsTrash } from "react-icons/bs";
import { BiCalendarEdit } from "react-icons/bi";

function List({ list, removeItem, EditItem }) {
  return (
    <div className='list'>
      {list.map((item) => {
        const { id, title, number } = item;
        return (
          <li key={id} className='list-item'>
            <p>{title}</p>
            <p>{number}</p>
            <div className='icons'>
              <button onClick={() => removeItem(id)} className='btn btn-trash'>
                <BsTrash />
              </button>
              <button className='btn ' onClick={() => EditItem(id)}>
                <BiCalendarEdit />
              </button>
            </div>
          </li>
        );
      })}
    </div>
  );
}

export default List;
