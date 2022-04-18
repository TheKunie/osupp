import { useStoreState } from "easy-peasy";
import { Button, Layer, Stack } from "@carbon/react";
import { useEffect } from "react";
import React from "react";

export function RenderData() {
  const userData = useStoreState((state) => state.user_data);

  return (
    <Stack orientation="horizontal" gap={4}>
      {/*<Button onClick={() => console.log(userData)} />*/}
      <h2>
        {userData === undefined || userData.username === false
          ? "No user found"
          : userData.username}
      </h2>
      <br />
      <img
        src={
          userData.username === false
            ? ""
            : "http://s.ppy.sh/a/" + userData.user_id
        }
        alt=""
      />
      <h3>
        {userData.username === false
          ? ""
          : "Accuracy: " + Math.round(userData.accuracy * 100) / 100 + "%"}
      </h3>
      <h3>
        {userData.username === false
          ? ""
          : "Performance Points: " + userData.pp_raw}
      </h3>
    </Stack>
  );
}
