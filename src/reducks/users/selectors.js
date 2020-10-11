import { createSelector } from 'reselect'
// import { createStore } from 'redux';


// stateはstore全体で管理しているstateのこと
const usersSelector = (state) => state.users;

export const getIsSignedIn = createSelector (
    [usersSelector],
    state => state.isSignedIn　　// state.users.isSignedInの情報のみ返す
)

export const getUserId = createSelector (
    [usersSelector],
    state => state.uid  // 展開すると => state.users.uid
)

export const getUsername = createSelector (
    [usersSelector],
    state => state.username    // state.users.username
)

export const getUserrole = createSelector (
    [usersSelector],
    state => state.role    // state.users.username
)

// export const getUserAvator = createSelector (
//     [usersSelector],
//     state => state.avator
// )

export const getUserintroduction = createSelector (
    [usersSelector],
    state => state.self_introduction
)