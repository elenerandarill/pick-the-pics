import React from 'react';
import './App.css';
import DisplayFolders from "./components/displayFolders";
import DisplaySearch from "./components/displaySearch";
import SearchBox from "./components/searchBox";

function App() {

    return (
        <div className="App">
            <div className="body-container">

                <div className="body-center">
                    <DisplayFolders/>
                    <SearchBox/>
                    <DisplaySearch/>
                </div>
            </div>
        </div>
    );
}

export default App;
