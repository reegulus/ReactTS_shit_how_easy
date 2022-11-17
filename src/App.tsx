import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


function App() {
    return (
        <div>

            <Accordion titleValue = {"Menu"} collapsed={true}/>
            <Accordion titleValue = {"Users"} collapsed={false}/>

        </div>
    );
}

type PageTitleProsType = {
    title: string
}

function PageTitle(props: PageTitleProsType) {
    return (
        <div>
            <h2>{props.title}</h2>
        </div>
    )
}




export default App;
