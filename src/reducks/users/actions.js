// payload(storeの状態を変更するために必要なデータ)をreducerに渡す仲介役
// Actions は必ずプレーンなオブジェクトを返す

export const SIGN_IN = "SIGN_IN"
export const signInAction = (userState) => {
    return {
        type: "SIGN_IN",
        payload: {
            isSignedIn: true,
            role: userState.role,
            uid: userState.uid,
            username: userState.username
        }
    }
};

export const SIGN_OUT = "SIGN_OUT"
export const signOutActions = () => {
    return {
        type: "SIGN_OUt",
        payload: {
            isSignedIn: false,
            role: "",
            uid: "",
            username: ""
        }
    }
}