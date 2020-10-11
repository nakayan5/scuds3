import { createSelector } from 'reselect'

// stateはstore全体で管理しているstateのこと
const opinionsSelector = (state) => state.opinions;
// console.log(opinionsSelector); // => state.opinions


export const getOpinions = createSelector (
    [opinionsSelector],
    state => state.list
)