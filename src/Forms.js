import React, { useState } from "react";
import "./Forms.scss";
import Alert from "./Alert";
import List from "./List";

function Forms() {
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const removeItem = (id) => {
    setList(
      list.filter((item) => {
        return item.id !== id;
      })
    );
    showAlert(true, "item delete", "error");
  };

  const addItem = (e) => {
    e.preventDefault();
    if (!name || !time) {
      showAlert(true, "please enter a value", "error");
    } else if (name && isEdit) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name, number: time };
          }
          return item;
        })
      );
      setName("");
      setTime("");
      setIsEdit(false);
      setEditId(null);
      showAlert(true, "item edit", "success");
    } else {
      setList([
        ...list,
        { id: new Date().getTime().toString(), title: name, number: time },
      ]);
      setName("");
      setTime("");
      showAlert(true, "item add", "success");
    }
  };
  const EditItem = (id) => {
    const newItem = list.find((item) => item.id === id);
    setEditId(id);
    setIsEdit(true);
    setName(newItem.title);
    setTime(newItem.number);
  };
  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };
  const clearList = () => {
    showAlert(true, "empty list", "danger");
    setList([]);
  };
  return (
    <div className='container'>
      <h2 className='text'>todo list</h2>
      <p className='notification'>{list.length}</p>
      <form className='forms' onSubmit={addItem}>
        {alert.show && <Alert alert={alert} showAlert={showAlert} />}
        <input
          type='text'
          className='forms-input'
          placeholder='فعالیت'
          onChange={(e) => setName(e.target.value)}
          name='text'
          value={name}
        />
        <input
          type='time'
          className='forms-input'
          placeholder='زمان'
          onChange={(e) => setTime(e.target.value)}
          name='number'
          value={time}
        />
        {isEdit ? (
          <button type='submit' className='forms-btn'>
            ویرایش
          </button>
        ) : (
          <button type='submit' className='forms-btn' onClick={showAlert}>
            افزودن
          </button>
        )}
      </form>
      <List list={list} removeItem={removeItem} EditItem={EditItem} />
      {list.length > 0 && (
        <button className='clear-btn' onClick={clearList}>
          پاک کردن لیست
        </button>
      )}
    </div>
  );
}

export default Forms;
