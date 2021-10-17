import React from 'react';
import './App.css';
import DisplayFolders from "./components/displayFolders";
import DisplaySearch from "./components/displaySearch";
import SearchBox from "./components/searchBox";
import ListFolder from "./components/listFolder";

function App() {

    return (
        <div className="App">
            <div className="body-container">

                <div className="body-center">
                    <DisplayFolders/>
                    {/*<ListFolder/>*/}
                    <SearchBox/>
                    <DisplaySearch/>
                </div>
            </div>
        </div>
    );
}

export default App;
