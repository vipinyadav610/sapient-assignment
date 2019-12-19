import React from "react";
import { storiesOf } from "@storybook/react";
import PostItem from "./PostItem";

const post = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  gender: "Male",
  origin: {
    name: "Earth (C-137)"
  },
  location: {
    name: "Earth (Replacement Dimension)"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  created: "2017-11-04T18:48:46.250Z"
};
storiesOf("PostItem", module).add("PostItem", () => (
  <div>
    <PostItem {...post} />
  </div>
));
