import React from "react";
import { useState } from "react";
import UpdateForm from "../modalUpdate/update";
import './smart.css'

const SmartBox = ({ item, deleteHandler, getHandler }) => {
  const [show, setShow] = useState(false)
  return (
    <>
    {
      show?
      <UpdateForm
       stat={show}
       setStat={setShow}
       item={item}
       getHandler={getHandler}/>:""
    }
      <div className="wrapper">
        <h1>
          {item.title}
          <br />
        </h1>
        <p>
        {item.disc}
        </p>
        <button
          className="btn btn-primary m-2"
          name={item.id}
          onClick={(e) => deleteHandler(e, item)}
        >
          delete
        </button>
        <button
          className="btn btn-primary m-2"
          name={item.id}
          onClick={e=>setShow(!show)}
        >
          update
        </button>
      </div>
    </>
  );
};

export default SmartBox;
