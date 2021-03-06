import {HIDE_LOADER, SHOW_LOADER, SHOW_ALERT, HIDE_ALERT} from './Types'
const initialState = {
    loading: false,
    alert: false
}
export const loadReduser = (state = initialState, action) =>{
     switch(action.type){
         case SHOW_LOADER:
             return{...state, loading: true}
        case HIDE_LOADER:
            return{...state, loading: false}  
            case SHOW_ALERT:
                return{...state, alert: action.payload}
           case HIDE_ALERT:
               return{...state, alert: null}  
        default: return state       
     }
}