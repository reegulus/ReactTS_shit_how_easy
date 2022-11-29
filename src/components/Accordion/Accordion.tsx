import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onClick: (collapsed: boolean)=> void
}

export function Accordion(props: AccordionPropsType) {

        return <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick} collapsed={!props.collapsed}/>
            {props.collapsed && <AccordionBody/>}
        </div>
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onClick: (collapsed: boolean)=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h2 onClick={ () => {props.onClick(props.collapsed)}}>{props.title}</h2>
        </div>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}