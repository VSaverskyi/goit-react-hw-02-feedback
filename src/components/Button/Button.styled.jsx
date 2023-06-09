import styled from "@emotion/styled";

export const ButtonFeedback = styled.button`
background-color: #eff0fc;
color: #000;
font-weight: 600;
border: 1px solid #a2a2a2;
height: 24px;
border-radius: 4px;
padding: 4px 16px;
text-transform: capitalize;

:hover {
    box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.25);
}

:active {
    background-color: #91a2a2;
}
`;