import React, { useId, useState } from "react";
import "./App.css";

const Todo = () => {
  const [id, setId] = useState("")
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  let saveData = (e) => {
    e.preventDefault();
    if (id != '') {
      let res = data.map((i, index) => {
        if (index == id) {
          i = name
        }
        return i
      })
      setData(res)
    } else {
      setData([...data, name]);
    }
    setName("");
    setId("")
  };

  const delItem = (id) => {
    let res = data.filter((i, index) => {
      return index != id;
    });
    setData(res);
  }

  const editItem = (id) => {
    let editData = data.find((i, index) => {
      return index == id
    });
    setName(editData);
    setId(id)
  }
  return (
    <>
      <div className="to-do">
        <div className="main-todo App">
          <h1> Grocery Shopping </h1>
          <br />
          <table className="tab">
            {data.map((i, index) => {
              return (
                <tr className="td-todo">
                  <td> {i} </td>
                  <td>
                    <button onClick={() => delItem(index)}> del </button>
                    <button onClick={() => editItem(index)}>ADD</button>
                  </td>
                </tr>
              );
            })}
          </table>
          <br /> <br />
          <form action="#" method="post" name="Myform" onSubmit={saveData}>
            <input
              type="text"
              placeholder="Add something to list"
              name="inp-name"
              id="inp-name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input type="submit" className="inp-todo" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Todo;
