import React from "react";
import CardCustomProps from "../interfaces/CardCustomProps";
import CardCustom from "./CardCustom";
import galaxy from "../images/galaxy.jpeg";
import { Grid } from "@material-ui/core";

export default function CardExample() {
  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        {data.map((card) => (
          <Grid item key={Math.random().toString()} xs={12} md={6} lg={3}>
            <CardCustom
              title={card.title}
              image={card.image}
              desc={card.desc}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

const data: CardCustomProps[] = [
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
  {
    title: "galaxy",
    image: galaxy,
    desc:
      "A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity.",
  },
];
