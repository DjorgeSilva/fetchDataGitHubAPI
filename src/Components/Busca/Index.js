import React, { useState } from 'react'
import { Container } from "./BuscaElements"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Resultado } from "../Resultado/Resultado"
import axios from "axios"
import { BsSearch } from "react-icons/bs"

export const Busca = () => {
    const [valorBusca, setValorBusca] = useState("");
    const [repos, setRepos] = useState([]);

    const handleBusca = (e) => {
        setValorBusca(e.target.value)
    }

    const handleClick = async () => {

        try {
            const result = await axios(`https://api.github.com/users/${valorBusca}/repos?sort`);
            setRepos(result);
            console.log(repos)
        }
        catch (error) {
            console.log(error)
        }


    }

    return (
        <Container className='container'>
            <h1>Repositório GitHub</h1>

            <div className="box-busca">
                <input type="search" placeholder="Busca por repositórios" value={valorBusca} onChange={handleBusca} />
                <BsSearch className='icone-busca' />
            </div>


            <button type="button" onClick={handleClick}>Buscar</button>

            <Resultado repos={repos}/>
            

        </Container>
    )
}
