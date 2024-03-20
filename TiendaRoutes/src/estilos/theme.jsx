import styled from "styled-components";

export const colors= {
    primary: "blue",
    secondary : "darkgray",
    danger: "red",
    rosado: "#a51142",
    gris:"#333",
    light: "#dff5ff",
};

export const theme={
    fg:"#BF4F74",
    bg: "white",

};

export function invertTheme({ fg, bg }) {
    return ({
        fg: bg,
        bg: fg,
    });
}

export const ButtonVM= styled.button`
color: ${props=> props.theme.fg};
border: 2px solid;
background: ${props=> props.theme.bg};
font-size: 1em;
margin:0;
padding: 0.25em 1em;
border-radius: 3px;
cursor: pointer;
`;