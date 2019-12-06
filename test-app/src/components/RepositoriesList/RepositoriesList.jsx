import React from "react";
import RepositoryItem from "./RepositoryItem/RepositoryItem";
import classes from "./RepositorySort/RepositorySort.module.sass";

const RepositoriesList = (props) => {
    let repositoryElm = props.repositoryInfo.map(el => <RepositoryItem date={el.created_at} name={el.full_name} address={el.clone_url}/>);
    return (
        <div>
            <div className={classes.sort}>
                <div className={classes.data} onClick={props.sortDate}>Data</div>
                <div className={classes.name} onClick={props.sortName}>Name</div>
            </div>
            {repositoryElm}
        </div>
    )
};

export default RepositoriesList;