import React from "react";
import SearchUser from "./SearchUser";
import {searchButton, updateNewSearchCreator} from "../../redux/repositoryPageReducer";

const SearchUserContainer = (props) => {
    let onSearchUserChange = (text) => {
        let action = updateNewSearchCreator(text);
        props.store.dispatch(action);
    };
    let search = () => {
        let action = searchButton();
        props.store.dispatch(action);
    };
    return (
        <SearchUser updateSearch={onSearchUserChange}
                    newSearch={props.store.getState().repositoryPage.newSearch}
                    search={search}/>
    )
};

export default SearchUserContainer;