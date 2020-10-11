// storeの初期状態
// アプリに必要なすべてのstateを記述

const initialState = {
    users: {
        isSignedIn: false,
        role: "",
        uid: "",
        username: "",
        avator: "",
        self_introduction: ""
    },
    opinions: {
        list: [],
    }
}

export default initialState
