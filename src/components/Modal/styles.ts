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
        max-width: 600px;
        background-color: beige;
        border-radius:5px;
        position:relative;
        padding: 30px;
            &__button{
                position:absolute;
                top:0;
                right:0;
                margin: 5px;
                padding: 5px 8px;
                background-color: transparent;
                border: none;
            }    
            &__form-button{
                background-color: red;
                border: none;
                border-radius: 5px;
                padding: 5px 10px;
                margin-top: 10px;
                color:white;
                font-weight: 600;
            }    
            &__form{
                div{
                    margin-top: 10px;
                }
                p{
                    font-weight: 600;
                    color:red;
                }
            } 
    } 
            
    
    
`
