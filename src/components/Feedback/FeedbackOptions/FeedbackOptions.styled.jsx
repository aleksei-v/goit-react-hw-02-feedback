import styled from "styled-components";

export const Button = styled.button`
    padding: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;
    text-align: center;

    font-size: ${p => p.theme.fontSizes.m};

    text-decoration: none;
    border-radius: ${p => p.theme.radii.normal};
    border: none;
    cursor: pointer;
    text-transform: uppercase;

    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
    transition: background-color 250ms linear, 
    scale 250ms linear;
    :hover {
        background-color: ${p => p.theme.colors.muted};
        scale: 1.1;
    }
 
`