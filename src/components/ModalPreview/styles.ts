import styled from "styled-components";

export const StyleModalPreview = styled.div`
    background-color: rgba(0,0,0, 0.5);
    inset: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    .modal{
        padding: 30px;
        display: flex;
        justify-content: center;
        align-items: center; 
        flex-direction: column;
        position:relative;
        box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.6);
        /* max-width: 500px; */
        /* min-width: 30px; */
        background-color: var(--red);
        border-radius:5px;
        &__titulo{
            padding-bottom: 30px;
            text-align: center;
            font-family: "Mountains of Christmas", cursive;
            font-weight: 800;
            font-size: 45px;
            letter-spacing: 5px;
            color: white;
            text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.9);
            position: relative;
            &::after {
                content: "";
                position: absolute;
                top: 85%;
                left: 30%;
                width: 40%;
                height: 1px;
                background-color: white;
                box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
                opacity: 0.5;
            }
        }
        &__button{
            position: absolute;
            top: 0;
            right: 0;
            margin: 10px 12px 0 0;
            background: transparent;
            border:none;
            cursor:pointer;
            transition:300ms ease-in-out;
            &:hover{
                color:white;
            }
        }
        &__container-p{
            margin-left: 10px;
            font-family: "Poppins", sans-serif;
            font-size: 17px;
            p{
                /* font-weight: 600; */
            }
            .span{
                font-weight: 600;
            }
        }
        
        li{
            background-color:  var(--red-ligth);
            margin-bottom: 20px;
            list-style: none;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            &:last-child{
                margin-bottom:0;
            }
            img{
                width: 70px;
                height: 70px;
            }
        }
    }
`