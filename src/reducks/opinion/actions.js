// payload(storeの状態を変更するために必要なデータ)をreducerに渡す仲介役
// Actions は必ずプレーンなオブジェクトを返す

export const FETCH_OPINIONS = "FETCH_OPINIONS"
export const fetchOpinionsAction= (opinions) => {
    // console.log(opinions); // Array
    return {
        type: "FETCH_OPINIONS",
        payload: opinions
    }
};

