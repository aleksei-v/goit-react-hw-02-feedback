import styled from "styled-components";

export const StyledNotification = styled.p`
    margin-top: ${p => p.theme.space[5]}px;
    margin-left: auto;
    margin-right: auto;
    width: 240px;

    font-size: ${p => p.theme.fontSizes.l};
`