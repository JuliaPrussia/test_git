import React from "react";
import classes from "./RepositorySort.module.sass"

const RepositorySort = (props) => {

    return (
        <div className={classes.sort}>
            <div className={classes.data}>Data</div>
            <div className={classes.name}>Name</div>
        </div>
    )
};

export default RepositorySort