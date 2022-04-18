import React from "react";
import "./App.scss";
import { SearchForm } from "./Search";
import { Grid, Column } from "carbon-components-react";
import { createStore, StoreProvider, action, useStoreState } from "easy-peasy";
import { RenderData } from "./RenderData";

export default function App() {
  const store = createStore({
    user_data: { username: false },
    updateUserData: action((state, payload) => {
      state.user_data = payload;
    })
  });

  return (
    <StoreProvider store={store}>
      <div className="app">
        <Grid>
          <Column lg={12}>
            <h2 color="red">osu! profile info</h2>
            <br />
          </Column>

          <Column lg={4}>
            <SearchForm />
          </Column>
          <Column>
            <RenderData />
          </Column>
        </Grid>
      </div>
    </StoreProvider>
  );
}
