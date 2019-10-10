import React from "react";
import styled from "styled-components";

const MyFooter = styled.footer`
    height: 56px;
    width: 100%;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Footer() {

    return (
        <MyFooter>
            <p className="text-muted">Some Sort of Text</p>
        </MyFooter>
    )
}