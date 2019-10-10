import React from "react";
import NavItem from "./NavItem";

const navLinks = [
    {
        name: "Option1",
        link: "www.facebook.com"
    },
     {
        name: "Option2",
        link: "www.twitter.com"
     },
     {
         name: "Option3",
         link: "www.instagram.com"
     }
]

export default function Navigation(props) {
    
    return (
        <nav>
            <NavItem link={navLinks[0].link} name={navLinks[0].name} />

            <NavItem link={navLinks[1].link} name={navLinks[1].name} />

            <NavItem link={navLinks[2].link} name={navLinks[2].name} />
        </nav>
    )
}