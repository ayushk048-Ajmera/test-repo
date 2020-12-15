import { Star, SupervisedUserCircle } from "@material-ui/icons";
import AutoCompleteCustomProps from "../interfaces/AutoCompleteCustomProps";

export const data: Array<AutoCompleteCustomProps> = [
  {
    id: 1,
    variant: "outlined",
    label: "project",
    options: [
      { id: 1, title: "The Shawshank Redemption", year: 1994, icon: <Star /> },
      {
        id: 1,
        title: "The Godfather",
        year: 1972,
        icon: <SupervisedUserCircle />,
      },
      { id: 1, title: "The Godfather: Part II", year: 1974, icon: <Star /> },
      { id: 1, title: "The Dark Knight", year: 2008, icon: <Star /> },
    ],
  },
  {
    id: 2,
    variant: "filled",
    label: "Movies",
    options: [
      { id: 1, title: "The Shawshank Redemption", year: 1994, icon: <Star /> },
      {
        id: 1,
        title: "The Godfather",
        year: 1972,
        icon: <SupervisedUserCircle />,
      },
      { id: 1, title: "The Godfather: Part II", year: 1974, icon: <Star /> },
      { id: 1, title: "The Dark Knight", year: 2008, icon: <Star /> },
    ],
  },
  {
    id: 3,
    variant: "standard",
    label: "Movies",
    options: [
      { id: 1, title: "The Shawshank Redemption", year: 1994, icon: <Star /> },
      {
        id: 1,
        title: "The Godfather",
        year: 1972,
        icon: <SupervisedUserCircle />,
      },
      { id: 1, title: "The Godfather: Part II", year: 1974, icon: <Star /> },
      { id: 1, title: "The Dark Knight", year: 2008, icon: <Star /> },
    ],
  },
];
