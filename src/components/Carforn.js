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
    <div className="border p-4 border-red-100">
      <h1 className="text-2xl p-1 drop-shadow-md text-purple-500">Car-Collector</h1>
      <form className=" container max-w-xl mx-auto leading-6 space-y-3 grid" onSubmit={submithandler}>
        <input placeholder="Car-Name" className="outline-none border" value={name} onChange={changehandler} />
        <input className="border" placeholder="Enter amount" onChange={costhandler} value={cost || ""} />
        <button className="py-2 text-white px-4 bg-indigo-500" type="submit" >add</button>
      </form>
    </div>
  );
}

export default Carforn;
