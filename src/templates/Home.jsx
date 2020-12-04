import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
// import {PrimaryButton} from '../components/UIkit/index'
// import {push} from 'connected-react-router'
import {fetchOpinions} from '../reducks/opinion/operations'
import {getOpinions} from '../reducks/opinion/selectors'
import {OpinionCard} from '../components/Opinion/index'

const Home = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state);
    const opinions = getOpinions(selector)

    useEffect(() => {
        dispatch(fetchOpinions())
    }, [opinions])

    return (
        <div className='c-section-wrapin'>
           
                {opinions.length > 0 && (
                    opinions.map(opinion => (
                        <OpinionCard
                            text={opinion.text} id={opinion.id} key={opinion.id}
                        />
                    ))
                )}
      
        </div>
    )
}

export default Home;
