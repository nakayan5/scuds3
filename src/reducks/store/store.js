import { 
    createStore as reduxCreateStore, 
    combineReducers,
    applyMiddleware
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';  // Reduxのstoreでルーティングを管理できるようにするパッケージ
import thunk from 'redux-thunk'
import { UsersReducer } from '../users/reducers'
import { OpinionsReducer } from '../opinion/reducers'


// historyとはブラウザが前回どのパスにいたのか、現在どのパスにいるのかという情報を持っている値
export default function createStore(history) {
    return reduxCreateStore (
        combineReducers({
            router: connectRouter(history),   //historyが持っている情報をreduxのstoreのstateで管理できるようにする記述
            users: UsersReducer,
            opinions: OpinionsReducer
        }),
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
}