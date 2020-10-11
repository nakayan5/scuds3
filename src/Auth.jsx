import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getIsSignedIn } from './reducks/users/selectors';
import { listenAuthState } from './reducks/users/operations';

const Auth = ({children}) => {
    const dispatch = useDispatch()
    const selector = useSelector( (state) => state )
    const isSignedIn = getIsSignedIn(selector)

    // Authコンポーネントの最初のrenderが走った後に実行したい処理 (componentDidMountと同様)
    useEffect(() => {
        if (!isSignedIn) {
            dispatch(listenAuthState())
        }
    }, [])

    if (!isSignedIn) {
        return <></>
    } else {
        return children  // <Route exact path={"(/)?"} component={Home} />
    }
}

export default Auth;