import React from "react";
import { NativeRouter, Route } from "react-router-native";
import Context from "./Context";
import { Creation } from "./Pages/Creation";
import { Home } from "./Pages/Home";

export default function App() {
  return (
    <Context.Provider>
      <NativeRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/Creation" component={Creation} />
      </NativeRouter>
    </Context.Provider>
  );
}
