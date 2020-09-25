import { combineReducers } from "redux";
import { loadReduser } from "./LoadReduser";
import {postReduser} from './PostsReduser'

export const RootReduser = combineReducers({
    posts:postReduser,
    loading: loadReduser 

})