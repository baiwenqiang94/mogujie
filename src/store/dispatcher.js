import {Dispatcher} from "flux";
import store from "./index";

const dispatcher = new Dispatcher();

dispatcher.register((action)=>{
    switch(action.type){
        case "INPUT_CHANGE":
            store.handleChange(action.value,action.style);
            break; 
        case "ADD_ITEM":
            store.handleAddItem();
            break;
        case "MODIFY_ITEM":
            store.handleModifyItem(action.value);
            break;
        case "MODIFY_CHANGE":
            store.handleModifyChange(action.value,action.style);
            break;
        case "MODIFY_SUCCESS":
            store.handleModifySuccess();
            break;
    }
})

export default dispatcher;