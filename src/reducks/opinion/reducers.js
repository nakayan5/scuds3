import * as Actions from './actions';
import initialState from '../store/initialState';

// Actionからデータを受け取りStoreのstateをどう変更するのかを決める管理人
// 第一引数にはstate
// 第二引数にはactionがreturnした値(プレーンなオブジェクト)
export const OpinionsReducer = ( state = initialState.opinions, action ) => {
    switch (action.type) {
        case Actions.FETCH_OPINIONS:
            // console.log(state.list);  // => list: []
            return {
                ...state,
                list: [...action.payload]
            }

        default: 
            return state
    }
}