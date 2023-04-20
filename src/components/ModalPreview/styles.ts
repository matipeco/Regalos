import styled from "styled-components";

export const StyleModalPreview = styled.div`
    background-color: rgba(0,0,0, 0.5);
    inset: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    .modal{
        background-color: beige;
        border-radius: 5px;
        padding: 10px;
        
        li{
            list-style: none;
        }
    }
`