import styled from "styled-components";

export const StyledRegalo = styled.li`
    margin-top: 10px;
    list-style:none;
    position:relative;
    border: 1px solid black;
    font-family: "Poppins", sans-serif;
    /* display: flex; */
    /* flex-direction: column; */
    background-color:  var(--red-ligth);
    img{
        border: 1px solid black;
    }
    p{
        font-weight: 600;
    }
    span{
        font-weight: 500;
    }
    button{
        font-family: "Poppins", sans-serif;
        /* position: absolute; */
        top: 0;
        right: 0;
        padding: 5px 8px;
        border-radius: 10px;
        border: none;
        background-color: red;
        width: 80px;
    }
`