import * as Actions from './actions';
import initialState from '../store/initialState';

// Actionからデータを受け取りStoreのstateをどう変更するのかを決める管理人
// 第一引数にはstate
// 第二引数にはactionがreturnした値(プレーンなオブジェクト)
export const UsersReducer = ( state = initialState.users, action ) => {
    //actionのtypeに応じて処理を変える
    switch (action.type) {
        case Actions.SIGN_IN:
            return {
                ...state,
                ...action.payload
            }

        case Actions.SIGN_OUT:
            return {
                // ...state,
                ...action.payload
            }

        default: 
            return state
    }
}