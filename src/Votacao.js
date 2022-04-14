import React, { useState, useEffect } from 'react';
import Conecta from "./Conecta";

const Votacao = () => {
    const [jogadores, setJogadores] = useState([]);

    const getOrder = async() =>{
        const lista = await Conecta.get('jogadores/listvotos')
        setJogadores(lista.data)
    }

    useEffect(() => {
        getOrder();
      }, []);

    return (
        <div className="col-sm-12 col-6 mt-2">
            <h2>Classificação da Votação do All Star Game</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Jogador</th>
                            <th>Time</th>
                            <th>Total de Votos</th>
                        </tr>
                        </thead>
                            {jogadores.map(jogador => 
                                <tbody>
                                <td>{jogador.nome}</td>
                                <td>{jogador.time}</td>
                                <td>{jogador.votos}</td>
                                </tbody>)}
                               
                </table>
        </div>
    )
}

export default Votacao;