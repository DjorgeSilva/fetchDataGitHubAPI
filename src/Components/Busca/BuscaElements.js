import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    padding: 20px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        text-align: center;
    }

    .box-busca{
        width: fit-content;
        height: 45px;
        margin: 30px auto;
        position: relative;

        input{
            width: 300px;
            height: 45px;
            border-radius: 20px;
            padding-left: 10px;
            outline: none;

            &:hover + .icone-busca{
                color: red;
            }

        }

        input[type="search"]::-webkit-search-cancel-button {
                display: none;
        }

        .icone-busca{
            cursor: pointer;
            font-size: 1.3rem;
            position: absolute;
            right: 17px;
            top: 10px;

            &:hover{
                color: red;
            }
        }
    }

    button{
        width: 120px;
        text-transform: uppercase;
        border-radius: 10px;
        padding: 7px 0;
        background: #161B22;
        color: #fff;
        border: 1px solid #161B22;
        font-weight: bold;

        &:hover{
            background: transparent;
            color: #161B22;
        }
    }


`