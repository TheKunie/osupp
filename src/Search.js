import React from "react";

import {
  IconButton,
  Button,
  Search,
  Grid,
  Column,
  Stack
} from "carbon-components-react";
import axios from "axios";
import { useState } from "react";
import { useStoreActions } from "easy-peasy";

export function SearchForm() {
  const apiKey = "";
  const [arg, setArg] = useState("");
  const setUserData = useStoreActions((actions) => actions.updateUserData);

  const fetchUser = (user) => {
    axios
      .get("https://osu.ppy.sh/api/get_user", {
        params: { k: apiKey, u: user }
      })
      .then((res) => {
        setUserData(res.data[0]);
        console.log(res);
      });
  };

  return (
    <>
      <Grid>
        <Search onChange={(e) => setArg(e.target.value)}></Search>
        <Button kind="secondary" onClick={() => fetchUser(arg)}>
          Go
        </Button>
      </Grid>
    </>
  );
}
