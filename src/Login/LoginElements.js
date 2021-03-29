import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #161B22;
    display: flex;
    justify-content: center;
    align-items: center;

    form{
        width: 90%;
        background: #fff;
        padding: 20px;

        @media (min-width: 750px){
            width: 600px;
        }

        h1{
            text-align: center;
            padding: 20px;
        }

        label{
            width: 100%;
            font-size: clamp(1rem, 2.5vw, 1.2rem);
            padding: 10px 0;
            margin-top: 10px;
        }
        input{
            width: 100%;
            height: 40px;
            padding-left: 12px;
        }

        button{
            display: block;
            width: 100px;
            margin: 40px auto;
            background: #161B22;
            border: 1px solid #161B22;
            color: #fff;

            &:hover{
                background: transparent;
                color: #161B22;
            }
        }
    }
`