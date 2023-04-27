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
        /* justify-content: center;
        align-items: center; */
        position:relative;
        box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.6);
        /* max-width: 500px; */
        /* min-width: 30px; */
        background-color: var(--red);
        border-radius:5px;
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