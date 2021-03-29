import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    text-align: center;
    padding: 30px 0;

    display: flex;
    justify-content: center;
    align-items: center;
    


    ul{
        width: 90%;
        height: fit-content;
        list-style: none;
        margin: 0 auto;
        padding: 0;


        @media (min-width: 750px){
            width: 750px;
            margin: 0 auto;
        }

        li{
            cursor: pointer;
            height: 90px;
            border: 1px solid #333;
            margin: 0 auto;
            margin-top: 20px;
            position: relative;
        
            

            display: flex;
            justify-content: center;
            align-items: center;

            &:hover{
                background-color: #161B22;
                color: #fff;
            }

            p{
                font-size: clamp(.7rem, 2.5vw, 1.2rem);
                margin-left: 30px;
                margin-top: 20px;
                font-weight: bold;
            }

            img{
                width: 50px;
                height: 50px;
                border-radius: 50%;
                position: absolute;
                top: 20px;
                left: 20px;
                margin-right: 20px;
        }

        }
    }
`

export const MoreInfo = styled.div`
    width: 100%;
    height: 350px;
    background: #CDCDCD;
    margin: 0 auto;
    position: relative;
    padding: 0 20px;
    text-align: left;

    .more-info-item{
        width: 100%;
        height: fit-content;
        padding-top: 10px;

        span{
            float: right;
        }
    }
`