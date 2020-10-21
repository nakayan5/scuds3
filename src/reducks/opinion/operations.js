import {fetchOpinionsAction} from "./actions"
import { push } from 'connected-react-router'  // pushはURLを遷移するメソッド
import {db, FirebaseTimestamp} from '../../firebase/index'

const timestamp = FirebaseTimestamp.now()
const opinionsRef = db.collection('opinions')

// 意見を投稿する関数
export const saveOpinion = (text, useId) => {
    return async (dispatch) => {
        const data = {
            text: text,
            updated_at: timestamp,
            uid: useId,
        }
        
        const number =  opinionsRef.doc()
        let id = number.id
        data.id = id
    
        return opinionsRef.doc(id).set(data, {merge: true})
            .then(() => {
                dispatch(push('/'))
            }).catch((error) => {
                throw new Error(error)
            })
    }
}

//opinio情報を取得する関数
export const fetchOpinions = () => {
    return async (dispatch) => {
        opinionsRef.orderBy('updated_at', 'desc').get()
            .then((snapahots) => {
                const opinionsList = []
                snapahots.forEach(snapahot => {
                    const opinion = snapahot.data()
                    opinionsList.push(opinion)
                })
                dispatch(fetchOpinionsAction(opinionsList))
            })
    }
}
