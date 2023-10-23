import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
/*    if (props.collapsed) {
        return <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    } else {
        return <div>
            <AccordionTitle title={props.title}/>
        </div>
    }*/


}

function AccordionTitle(props: any) {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}

function AccordionBody() {
    return (
        <div>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </div>
    )
}