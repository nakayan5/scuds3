import React from 'react';
import { Route, Switch } from 'react-router';
import { SignUp, SignIn, Reset, Home, PutOpinion, OpinionDetail, MyPage, ChangeProfile} from './templates/index'
import Auth from './Auth'

const Router = () => {
    return (
        <Switch>
            <Route exact path={"/signup"} component={SignUp} /> 
            <Route exact path={"/signin"} component={SignIn} />  {/* exactは指定してパスに完全一致していたらという意味で、その時指定したコンポーネントを表示する記述　*/}
            <Route exact path={"/signin/reset"} component={Reset} /> 

            {/* サインインした後のページは認証した状態で見れるようにしたい為,Authコンポーネントで括る */}
            <Auth>
                <Route exact path={"(/)?"} component={Home} />
                <Route exact path={"/put"} component={PutOpinion} />
                <Route exact path={"/put/edit/:id"} component={PutOpinion} />
                <Route exact path={"/opinion/:id"} component={OpinionDetail} />
                <Route exact path={"/mypage"} component={MyPage} />
                <Route exact path={"/mypage/profile"} component={ChangeProfile} />
            </Auth>
        </Switch>
    )
}

export default Router;