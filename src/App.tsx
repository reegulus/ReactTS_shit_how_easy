import React from 'react';
import './App.css';

//function declaration
function App() {
    return (
        <div>
            This is App component
            <Rating/>
            <Accordion/>
        </div>
    );
}

function Rating() {
    return <div>
       <Star/>
       <Star/>
       <Star/>
       <Star/>
       <Star/>
    </div>
}

function Accordion() {
    return (
        <div>
            <h2>Menu</h2>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

function Star() {
    return (
        <div>star</div>
    )
}

export default App;
