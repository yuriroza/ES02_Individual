import React, { useContext } from "react";
import { ClienteContext } from "./ClienteContext";
import './ItemLista.css'

const ItemLista = (props) => {

  const cliente = useContext(ClienteContext);
  console.log(cliente)

  let voteButton;

  if(cliente.dados.id) {
      voteButton = (
        <>
          <div className='text-align: center'>
          <span className='' onClick={props.voteClick}>
            <button type="button" className="btn btn-success mt-2">Votar</button>
          </span>
          </div>
        </>
      )
  }
  
  return (
    <div className="card col-sm-3 col-6 mt-2">
      <img className="card-img-top" src={props.foto} alt="Jogador em Destaque" />
      <div className="card-body">
        <h4 className="card-title teste">
          {props.nome}
        </h4>
        <p className="card-text center">
          {props.time}
        </p>
        <p className="card-text center">
          {props.idade} anos 
        </p>
        {voteButton}
      </div>
    </div>
  );
};

export default ItemLista;