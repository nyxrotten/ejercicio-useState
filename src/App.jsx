import { useState } from 'react';
import './App.css';


function App() {

    const [name, setName] = useState("Sofía");

    return(
        <div>
        <h2>Teacher name: {name}</h2>
            <ul>
                <li onClick={() => setName("Data")}><p>Data</p></li>
                <li onClick={() => setName("Reyes")}><p>Reyes</p></li>
                <li onClick={() => setName("Yolanda")}><p>Yolanda</p></li>
            </ul>
    </div>
    )
}

export default App
