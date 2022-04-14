import React, { useState, useEffect } from 'react';
import Conecta from "./Conecta";
import './Estatisticas.css';

const Estatisticas = () => {
    const [stats, setStats] = useState([]);
    const [votes, setVotes] = useState([]);

    const getStats = async() =>{
        const lista = await Conecta.get('stats')
        setStats(lista.data)
    }

    const getVotes = async() => {
        const listaVotos = await Conecta.get('statsvotos')
        setVotes(listaVotos.data)
    }

    useEffect(() => {
        getStats();
        getVotes();
      }, []);
    
    return (
        <div className="col-sm-12 col-6 mt-2">
            <h2>Estatísticas de Jogadores</h2>
                <table className="table table-bordered centro">
                    <thead>
                        <tr>
                            <th>Nº de Jogadores</th>
                            <th>Nº de Times</th>
                            <th>Maior Idade</th>
                            <th>Menor Idade</th>
                            <th>Média Idade</th>
                        </tr>
                        </thead>
                            {stats.map(stat => 
                                <tbody className="centro">
                                <td>{stat.totalJogadores}</td>
                                <td>{stat.totalTimes}</td>
                                <td>{stat.maiorIdade} anos</td>
                                <td>{stat.menorIdade} anos</td>
                                <td>{stat.mediaIdade} anos</td>
                                </tbody>)}      
                </table>

                <h2>Estatísticas de Votos</h2>
                <table className="table table-bordered centro">
                    <thead>
                        <tr>
                            <th>Total de Votos</th>
                            <th>Nº de Pessoas Votantes</th>
                            <th>Nº de Jogadores Votados</th>
                        </tr>
                        </thead>
                            {votes.map(vote => 
                                <tbody className="centro">
                                <td>{vote.totalVotos}</td>
                                <td>{vote.pessoasVotaram}</td>
                                <td>{vote.jogadoresVotados}</td>
                                </tbody>)}
                               
                </table>
        </div>
    )
}

export default Estatisticas;