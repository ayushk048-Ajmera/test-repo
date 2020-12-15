import { Star, SupervisedUserCircle } from "@material-ui/icons";
import AutoCompleteCustomProps from "../interfaces/AutoCompleteCustomProps";
import React from "react";
import AutoCompleteCustom from "./AutoCompleteCustom";
import { Grid } from "@material-ui/core";
import { data } from "../util/autoCompleteData";

export const AutoCompleteExample = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        {data.map((data) => (
          <Grid item key={data.id} xs={12} md={6} lg={3}>
            <AutoCompleteCustom
              id={data.id}
              variant={data.variant}
              label={data.label}
              options={data.options}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
