import React from "react";

export default function NavItem(props) {

    return (
        <a href={props.link}>{props.name}</a>
    )
}