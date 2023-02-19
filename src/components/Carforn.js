import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addcar } from "../store";
function Carforn() {
  const dispatch = useDispatch();

  const changehandler = (e) => {
    dispatch(changeName(e.target.value));
  };
  const name = useSelector((state) => {
    return state.form.name;
  });
  const cost = useSelector((state) => {
    return state.form.cost;
  });
  const costhandler = (e) => {
    const carcost = parseInt(e.target.value) || 0;
    dispatch(changeCost(carcost));
  };
  const submithandler = (e) => {
    e.preventDefault();
    dispatch(
      addcar({
        name,
        cost,
      })
    );
   dispatch(changeCost(0))
   dispatch(changeName(''))
  };
  return (
    <div>
      <form onSubmit={submithandler}>
        <input value={name} onChange={changehandler} />
        <input onChange={costhandler} value={cost || ""} />
        <button>add</button>
      </form>
    </div>
  );
}

export default Carforn;
