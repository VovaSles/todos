import { showAlert } from "./actions"
import { CREATE_POST } from "./Types"
 
const forbidden = ['fuck','bitch','ass','matherfucker','dick']

export function forbiddenWordsMiddleware({dispatch}){
    return function(next){
        return function(action) {
            if(action.type === CREATE_POST){
                const found = forbidden.filter(w => action.payload.title.includes(w))
                if(found.length){
                    return dispatch(showAlert("You cant write this shit hire"))
                }
            }
            return next(action)
        }
    }
}