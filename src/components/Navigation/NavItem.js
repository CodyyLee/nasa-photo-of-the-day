import React from "react";
import styled from "styled-components";

const NavItems = styled.button`
    padding: 5px 10px;
    background-color: #333;
    color: #fff;
    border-radius: 4px;

    &:hover {
        background-color: white;
        color: #333;
        text-decoration: none;
    }
`;

export default function NavItem(props) {

    return (
        <NavItems as="a" href={props.link}>{props.name}</NavItems>
    )
}