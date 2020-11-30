import React from "react";
import "./App.scss";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import PokemonsContainer from "./components/PokemonsContainer";

function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/",
  });

  return (
    <div>
      <ApolloProvider client={client}>
        <main>
          <PokemonsContainer />
        </main>
      </ApolloProvider>
    </div>
  );
}

export default App;
