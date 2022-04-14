import React, { useState, useEffect, useContext } from "react";
import Conecta from "./Conecta";
import ItemLista from "./ItemLista";
import { ClienteContext } from "./ClienteContext";

const Listagem = () => {

  const [jogadores, setJogadores] = useState([]);
  const cliente = useContext(ClienteContext);

  const getJogadores = async () => {
    const lista = await Conecta.get("jogadores");
    setJogadores(lista.data);
  };

  useEffect(() => {
    getJogadores();
  }, []);

  const jaVotou = async (jogadorId) => {
    const voto = await Conecta.get(`votos/pesquisa/${cliente.dados.id}/${jogadorId}`);
    return voto.data.length;
  };

  const clienteVoto = async (id, index) => {
    if (await jaVotou(id)) {
      alert("Você já votou nesse jogador.");
      return;
    }

    let vote = {
      usuario_id: cliente.dados.id,
      jogador_id: id,
      votou: 1,
    };

    const config = {
      headers: { Authorization: `Bearer ${cliente.dados.token}` },
    };

    await Conecta.post("votos", vote, config);

    // Obtém o registro (para saber a quantidade de likes da tabela carros)
    const reg = await Conecta.get("jogadores/" + id);
    console.log(reg)

    let votos = Number(reg.data.votos) + 1;

    // altera a quantidade de likes no WebServices
    await Conecta.put("jogadores/voto/" + id);

    // atualiza o array
    let newJogadores = [...jogadores];
    newJogadores[index].likes = votos;
    setJogadores(newJogadores);

    alert("Ok! Obrigado pela sua participação");
  };

  return (
    <div className="container">
      <div className="row">
        {jogadores.map((jogador, index) => (
          <ItemLista
            foto={jogador.foto}
            nome={jogador.nome}
            time={jogador.time}
            idade={jogador.idade}
            votos={jogador.votos}
            voteClick={() => clienteVoto(jogador.id, index)}
            key={jogador.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Listagem;
