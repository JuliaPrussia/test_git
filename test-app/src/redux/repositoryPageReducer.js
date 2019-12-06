import * as axios from 'axios';

const NEW_SEARCH = "NEW-SEARCH";
const REPOSITORY_SORT_NAME = "REPOSITORY-SORT-NAME";
const REPOSITORY_SORT_DATE = "REPOSITORY-SORT-DATE";
const SEARCH_BUTTON = "SEARCH-BUTTON";
let flag = false;


let initialState = {
    repositoryInfo: [
    ],
    newSearch: 'JuliaPrussia'
};

const repositoryPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_SEARCH:
            state.newSearch = action.newText;
            return state;
        case SEARCH_BUTTON:
            axios.get(`https://api.github.com/users/${state.newSearch}/repos`).then(response => {
                if (response.status === 200) {
                    state.repositoryInfo = response.data;
                }
            });
            return state;
        case REPOSITORY_SORT_NAME:
            switch (flag) {
                case true:
                    flag = false;
                    state.repositoryInfo.sort((prev, next) => prev.name < next.name ? -1 : 1);
                    return state;
                case false:
                    flag = true;
                    state.repositoryInfo.sort((prev, next) => prev.name > next.name ? -1 : 1);
                    return state;
            }
            return state;
        case REPOSITORY_SORT_DATE:
            switch (flag) {
                case true:
                    flag = false;
                    state.repositoryInfo.sort((prev, next) => prev.created_at > next.created_at ? -1 : 1);
                    return state;
                case false:
                    flag = true;
                    state.repositoryInfo.sort((prev, next) => prev.created_at < next.created_at ? -1 : 1);
                    return state;
            }
            return state;
    }
    return state
};

export const updateNewSearchCreator = (value) => {
    return {
        type: NEW_SEARCH,
        newText: value
    }
};
export const searchButton = () => {
    return{type: SEARCH_BUTTON}
};
export const sortByName = () => {
    return {type: REPOSITORY_SORT_NAME}
};
export const sortByDate = () => {
    return {type: REPOSITORY_SORT_DATE}
};

export default repositoryPageReducer