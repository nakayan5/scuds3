import { signInAction, signOutActions} from "./actions"
import { push } from 'connected-react-router'  // pushはURLを遷移するメソッド
import {auth, db, FirebaseTimestamp} from '../../firebase/index'


export const changeProfile = (image, name, uid, self_introduction) => {
    return async (dispatch) => {
        db.collection('users').doc(uid).get().then((snapshot) => {
            const data = snapshot.data();
            const userNextData = {
                username: name,
                uid: uid,
                avator: image,
                self_introduction: self_introduction,
                role: data.role,
                created_at: data.created_at,
                updataed_at: FirebaseTimestamp.now()
            }
            db.collection('users').doc(uid).set(userNextData, {merge: true})
                .then(() => {
                    dispatch(push('/mypage'))
                }).catch((error) => {
                    throw new Error(error)
                })
        })
    }
}

// 認証リッスン関数(サインインしている状態なのかを見る)
export const listenAuthState = () => {
    return async (dispatch) => {
        return auth.onAuthStateChanged( user => {
            // 「ユーザーが存在していたら」つまり認証が完了していたらデータベースから情報を持ってきてstoreを更新する
            if (user) {
                const uid = user.uid    
                db.collection('users').doc(uid).get()
                    .then(snapshot => {
                        const data = snapshot.data()
                        dispatch(signInAction({
                            isSignedIn: true,
                            role: data.role,
                            uid: uid,　　// data.uid では？
                            username: data.username
                        }))
                    })
            } else {
                dispatch(push('/signin'))
            }
        })
    }
}

export const resetPassword = (email) => {
    return async (dispatch) => {
        if (email === '') {
            alert('必須項目が未入力です')
            return false
        } else {
            auth.sendPasswordResetEmail(email) 
                .then(() => {
                    alert('入力されたアドレスにパスワードリセット用のメールを送りました')
                    dispatch(push('/signin'))     
                }).catch(() => {
                    alert('パスワードリセットに失敗しました')
                })
            }
    }
}


// サインイン関数
export const signIn = (email, password) => {
    return async (dispatch) => {
        if (email === '' || password === '') {
            alert('必須項目が未入力です')
            return false
        }

        auth.signInWithEmailAndPassword(email, password) 
            .then(result => {
                const user = result.user
                
                // もしユーザーが存在していれば処理に進む
                if (user) {
                    const uid = user.uid
                    db.collection('users').doc(uid).get()
                        .then(snapshot => {
                            const data = snapshot.data()

                            dispatch(signInAction({
                                isSignedIn: true,
                                role: data.role,
                                uid: uid,
                                username: data.username
                            }))

                            dispatch(push('/'))
                        })
                }
            })
    }
}

// サインアップ関数
export const signUp = (username, email, password, confirmPassword) => {
    return async (dispatch) => {
        // Validation 入力した値がフォーマットに適しているかどうか
        if (username === '' || email === '' || password === '' || confirmPassword === '') {
            alert('必須項目が未入力です')
            return false
        }
        if (password !== confirmPassword) {
            alert('パスワードが一致しません')
            return false
        }
        // firebaseauthのcreateUserWithEmailAndPasswordでユーザーを作成
        return auth.createUserWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user
                // 作成したユーザーの情報ををもとにユーザーのデータ作成
                if (user) {
                    const uid = user.uid
                    const timestamp = FirebaseTimestamp.now()
                    const userInitialData = {
                        created_at: timestamp,
                        email: email,
                        role: 'user',
                        uid: uid,
                        updataed_at: timestamp,
                        username: username,
                        avator: "",
                        self_introduction: ""
                    }
                    // firebaseのデータに登録する
                    db.collection("users").doc(uid).set(userInitialData)
                        .then(() => {
                            dispatch(push('/'));
                        })
                }
            })
    }
}

// サインアウトをするときはstoreのstateを初期化しておくことに気を付ける
export const signOut = () => {
    return async (dispatch) => {
        auth.signOut()
            .then(() => {
                dispatch(signOutActions())
                dispatch(push('/'))
            })
    }
}

