import styled from "styled-components"

export const StyledHeader = styled.header`

        width: 100%;
        height: 90px;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;


        background-color: #322E59;

        h1{
            color: #C7867D;
        }

        .navBtnsList{
            padding: 0;
            list-style: none;
            display: flex;
            justify-content: space-around;
        }

        .navBtnsList button{
            border: none;
            background-color: transparent;
            color: #F2E7D4;
        }

        .navBtnsList button:hover{
            color: #C7867D;
            cursor: pointer;
        }

        @media (min-width: 800px){

            height: 105px;

            h1{
                font-size: 35px;
            }

            .navBtnsList button{
                width: 150px;
                font-size: 18px;
            }
        }

`