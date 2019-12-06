import React from 'react';
import './App.sass';
import SearchUserContainer from "./components/SearchUser/SearchUserContainer";
import RepositoriesListContainer from "./components/RepositoriesList/RepositoriesListContainer";


const App = (props) => {
  return (
    <div>
      <SearchUserContainer store={props.store}/>
      <RepositoriesListContainer store={props.store}/>
    </div>
  );
};

export default App;
