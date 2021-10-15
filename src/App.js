import React from 'react';
import {Counter} from './features/counter/Counter';
import './App.css';
import DisplayFolders from "./components/displayFolders";
import DisplayPhotos from "./components/displayPhotos";

function App() {
    return (
        <div className="App">
            <div className="body-container">

                <div className="body-center">
                    <DisplayFolders/>
                    <DisplayPhotos/>
                </div>
            </div>
        </div>
    );
}

export default App;
