import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

export const StyledModal = styled.div`
    background-color: rgba(0,0,0, 0.5);
    inset: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    animation: ${fadeIn} 1s forwards;
    
    .modal{
        box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.6);
        max-width: 500px;
        min-width: 350px;
        background-color: var(--red);
        border-radius:5px;
        position:relative;
        padding: 30px;
        min-height: 250px;
            &__button{
                position:absolute;
                top:3px;
                right:2px;
                margin: 5px;
                padding: 5px 8px;
                background-color: transparent;
                border: none;
                text-transform: uppercase;
                cursor: pointer;
                transition: 350ms ease-in-out;
                &:hover{
                    color:white;
                }
            }    
            &__form-button{
                border: none;
                border-radius: 3px;
                background-color: rgba(255, 255, 255, 0.653);
                margin-top: 20px;
                width: 100%;
                position: relative;
                padding: 10px 0;
                font-size: medium;
                font-family: "Poppins", sans-serif;
                letter-spacing: 1px;
                font-weight: bolder;
                font-size: 15px;
                text-transform: uppercase;
                box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
                transition: 350ms ease-in-out;
                &:hover{
                    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
                    background-color: white;
                    color: black;
                    transform: translateX(-5deg);
                    cursor: pointer;
                }
            }
            
            &__form-buttonSorprendeme{
                display: block;
                text-align: center;
                padding: 10px 0;
                border-radius: 5px;
                text-transform: uppercase;
                font-family: "Mountains of Christmas", cursive;
                border: none;
                background-color: rgba(0, 128, 0, 0.7);
                color: white;
                font-weight: 600;
                font-size: 18px;
                letter-spacing: 2px;
                text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.9);
                box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.3);
                width: 100%;
                margin-bottom: 25px;
                cursor: pointer;
                transition: 350ms ease-in-out;
            }
            &__form-buttonSorprendeme:hover{
                background-color: var(--green);
            }
            
            &__form{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                
                &-labels{
                    font-family: "Poppins", sans-serif;
                    padding: 0 5px ;
                    margin: 0px 20px;
                    font-weight: 600;
                    font-size: 17px;
                    letter-spacing: 1px;
                    text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.2);  
                }
              input{
                display: flex;
                margin: 5px 0 15px 0;
                padding: 5px 5px;
                width: 250px;
                font-size: 15px;
                background-color: rgba(255, 255, 255, 0.4);
                border-radius: 5px;
                border: none;
              }
            } 
    } 
            

`
