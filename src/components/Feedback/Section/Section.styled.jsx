import styled from "styled-components"


export const StyledTitle = styled.h2`
    text-transform: uppercase;
    text-align: center;
    color: ${p => p.theme.colors.text};
    font-size: ${p => p.theme.fontSizes.l};
    line-height: ${p => p.theme.lineHeights.body};
`