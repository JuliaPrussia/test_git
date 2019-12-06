import React from "react";
import RepositoriesList from "./RepositoriesList";
import {sortByDate, sortByName} from "../../redux/repositoryPageReducer";

const RepositoriesListContainer = (props) => {
    let state = props.store.getState();
    let sortName = () => {
        let action = sortByName();
        props.store.dispatch(action);
    };
    let sortDate = () => {
        let action = sortByDate();
        props.store.dispatch(action);
    };
    return (
        <RepositoriesList repositoryInfo={state.repositoryPage.repositoryInfo}
                          sortName={sortName}
                          sortDate={sortDate}/>
    )

};

export default RepositoriesListContainer;