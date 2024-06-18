import { useState } from 'react';
import './App.css';

// Ejercicio
// function App() {

//     const [name, setName] = useState("Sofía");

//     return(
//         <div>
//         <h2>Teacher name: {name}</h2>
//             <ul>
//                 <li onClick={() => setName("Data")}><p>Data</p></li>
//                 <li onClick={() => setName("Reyes")}><p>Reyes</p></li>
//                 <li onClick={() => setName("Yolanda")}><p>Yolanda</p></li>
//             </ul>
//     </div>
//     )
// }

//Bonus

function App() {

    const [name, setName] = useState("");

    
    return(
        <div>
            <form>
                <input type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="add a name"/>
                <button onClick={() => setName(target.value)}>Add</button>
            </form>
        <h2>Teacher name: {name}</h2>
    </div>
    )
}
export default App
