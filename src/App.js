import React from 'react';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import DisplayFolders from "./components/displayFolders";
import DisplaySearch from "./components/displaySearch";
import SearchBox from "./components/searchBox";
import ListFolder from "./components/listFolder";

function App() {

    return (
        <div className="App">
            <div className="body-container">

                <div className="body-center">
                    <ToastContainer/>
                    <DisplayFolders/>
                    <ListFolder/>
                    <SearchBox/>
                    <DisplaySearch/>
                </div>
            </div>
            <footer>paulina@kawinska.net</footer>
        </div>
    );
}

export default App;
