import { configureStore } from "@reduxjs/toolkit";
import { changeName,changeCost,formReducer } from "./slices/formSlice";
import { carreducer,changesearch,addcar,removecar } from "./slices/listSlice";


const store = configureStore({


    reducer: {
      cars:carreducer,
           form:formReducer

    }
})
export{store,changeName,changeCost,changesearch,addcar,removecar}