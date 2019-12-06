import React from "react";

const SearchUser = (props) => {
    let inputField = React.createRef();
    let onSearchUserChange = () => {
        let text = inputField.current.value;
        props.updateSearch(text);
    };
    return (
        <div>
            <input ref={inputField}
                   type="text"
                   value={props.newSearch}
                   onChange={onSearchUserChange}/>
            <button onClick={props.search}>search!</button>
        </div>
    )
};

export default SearchUser;