import React, { useState } from 'react'
import { Container, MoreInfo } from "./ResultadoElements"
import axios from "axios"


export const Resultado = ({ repos }) => {
    
    const [open, setOpen] = useState(true);
    const [languages, setLanguages] = useState([]);


    const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    function Bytes(x) {

        let l = 0, n = parseInt(x, 10) || 0;

        while (n >= 1024 && ++l) {
            n = n / 1024;
        }

        return (n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
    }

    return (
        <Container className="container">
            <ul>
                {repos.length !== 0 ?
                    repos.data.map((item, index) => {
                        return (
                            <>
                                <li key={item.id} onClick={(e) => this.togglePanel(e)}> <img src={item.owner.avatar_url} alt="avatar" /> <p>{item.name}</p></li>
                                {open ?
                                    <MoreInfo>
                                        <div className="more-info-item">URL Repositório: <span>{item.owner.html_url}</span></div>
                                        <div className="more-info-item">Tamanho Repositório: <span>{Bytes(item.size)}</span></div>
                                        <div className="more-info-item">Tecnologia Predominante: <span>{item.language}</span></div>
                                        <div className="more-info-item">Data de criação: <span>{(item.created_at)}</span></div>
                                        <div className="more-info-item">Data de atualização: <span>{item.updated_at}</span></div>
                                        <div className="more-info-item">Homepage: <span>{item.homepage}</span></div>
                                        <div className="more-info-item">Branch Padrão: <span>{item.default_branch}</span></div>
                                    </MoreInfo> : null}
                            </>
                        )
                    }) : "Nenhum item encontrado"}
            </ul>
        </Container>
    )
}
