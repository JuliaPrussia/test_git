import React from "react";
import classes from "./RepositoryItem.module.sass";

const RepositoryItem = (props) => {
    return (
        <a href={props.address} className={classes.item}>
            <div className={classes.date}>
                {props.date}
            </div>
            <div className={classes.name}>
                {props.name}
            </div>
        </a>
    )
};

export default RepositoryItem;