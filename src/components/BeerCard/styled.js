
import styled from "styled-components"

export const StyledBeerCard = styled.li`

        width: 100%;
        max-width: 320px;
        height: fit-content;

        padding: 20px 10px;
        border: 2px solid #F2E7D4;
        border-radius: 5px;

    figure{
        width: 100%;
        height: 200px;
        margin-bottom: 15px;
    }

    img{
        height: 100%;
    }

    .cardInfo{
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap:10px;

        border-top: 1px solid #F2E7D4;
        border-bottom: 1px solid #F2E7D4;
        margin-bottom: 15px;
    }

    .cardInfo h4{
        font-size: 18px;
        color: #322E59;
    }

    .cardInfo p{
        font-size: 12px;
        text-align: left;
    }

    .cardButtons{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .cardButtons p{
        color: #322E59;
        font-weight: 600;
    }

    .cardButtons button{
        width: 60%;
        height: 30px;
        background-color: #C7867D;
        color: #322E59;
        border: none;
        border-radius: 5px;
        font-weight: bold;
        transition: 0.3s;
    }

    .cardButtons button:hover{
        cursor: pointer;
        background-color: #322E59;
        color: #C7867D;
    }

    @media (min-width: 800px){

        max-width: 100%;
        display: flex;
        
        figure{
            width: 30%;
            margin-bottom: 0;
        }

        .cardInfo{
            width: 45%;
        
            border: none;
            border-left: 1px solid #F2E7D4;
            border-right: 1px solid #F2E7D4;
            
            margin-bottom: 0;
        }

        .cardButtons{
            width: 25%;
            justify-content: space-evenly;
        }

        .cardButtons button{
            width: 80%;
        }

    }
`    