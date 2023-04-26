import styled from "styled-components";

export const StyledRegalo = styled.li`
    margin-top: 10px;
    list-style:none;
    position:relative;
    font-family: "Poppins", sans-serif;
    background-color:  var(--red-ligth);
    padding: 15px;
    display: flex;
    align-items: center;
    img{
        width: 60px;
        height: 60px;
        display: flex;
    }
    span{
        font-weight: 500;
    }
    .container-text{
        font-weight: 600;
        font-size: 14px;
        color:black;
        margin: 0 15px;
    }   

    .container-buttons{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        text-align:center;
        margin-left: auto;
        /* width: 30%; */
    }
    .button-edit, 
    .button-delete,
    .button-dupl{
        height: 25px;
        font-family: "Poppins", sans-serif;
        font-size: 12px;
        /* text-align: center; */
        text-transform: uppercase;
        border-radius: 5px;
        border: none;
        padding: 0 12px;
        margin: 0 0 5px;
        width: 100%;
        display: block;
        transition: 350ms ease-in-out;
        &:hover{
            box-shadow: 0 0 3px black;
            cursor: pointer;
        }
    }
    .button-delete{
        margin-bottom: 0;
    }

`