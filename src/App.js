import React, {useState} from "react";
import Header from "./Header.js";
import Listagem from "./Listagem.js";
import UserLogin from "./UserLogin.js";
import { ClienteContext } from "./ClienteContext.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Grafico  from "./Grafico.js";
import Votacao from "./Votacao.js";
import Estatisticas from "./Estatisticas.js";

function App() {

  const [dados, setDados] = useState({})

  return (
    <ClienteContext.Provider value={{dados, setDados}}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Listagem />
          </Route>
          <Route path="/login">
            <UserLogin />
          </Route>
          <Route path="/grafico">
            <Grafico />
          </Route>
          <Route path="/votacao">
            <Votacao />
          </Route>
          <Route path="/estatisticas">
            <Estatisticas />
          </Route>
        </Switch>
      </Router>
    </ClienteContext.Provider>
  );
}

export default App;
