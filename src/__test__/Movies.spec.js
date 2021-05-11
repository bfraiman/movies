import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import Movies from "../components/Movies";

const movies = {
  isLoading: false,
  data: [
    {
      adult: false,
      backdrop_path: "/8f9dnOtpArDrOMEylpSN9Sc6fuz.jpg",
      genre_ids: [12, 14, 10751],
      id: 674,
      original_language: "en",
      original_title: "Harry Potter and the Goblet of Fire",
      overview:
        "When Harry Potter's name emerges from the Goblet of Fire, he becomes a competitor in a grueling battle for glory among three wizarding schools — the Triwizard Tournament. But since Harry never submitted his name for the Tournament, who did? Now Harry must confront a deadly dragon, fierce water demons and an enchanted maze only to find himself in the cruel grasp of He Who Must Not Be Named. In this fourth film adaptation of J.K. Rowling's Harry Potter series, everything changes as Harry, Ron and Hermione leave childhood forever and take on challenges greater than anything they could have imagined.",
      popularity: 138.08,
      poster_path: "/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg",
      release_date: "2005-11-16",
      title: "Harry Potter and the Goblet of Fire",
      video: false,
      vote_average: 7.8,
      vote_count: 15483,
    },
    {
      adult: false,
      backdrop_path: "/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
      genre_ids: [12, 14],
      id: 671,
      original_language: "en",
      original_title: "Harry Potter and the Philosopher's Stone",
      overview:
        "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths -- and about the villain who's to blame.",
      popularity: 156.534,
      poster_path: "/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
      release_date: "2001-11-16",
      title: "Harry Potter and the Philosopher's Stone",
      video: false,
      vote_average: 7.9,
      vote_count: 20203,
    },
    {
      adult: false,
      backdrop_path: "/1stUIsjawROZxjiCMtqqXqgfZWC.jpg",
      genre_ids: [12, 14],
      id: 672,
      original_language: "en",
      original_title: "Harry Potter and the Chamber of Secrets",
      overview:
        "Cars fly, trees fight back, and a mysterious house-elf comes to warn Harry Potter at the start of his second year at Hogwarts. Adventure and danger await when bloody writing on a wall announces: The Chamber Of Secrets Has Been Opened. To save Hogwarts will require all of Harry, Ron and Hermione’s magical abilities and courage.",
      popularity: 130.154,
      poster_path: "/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
      release_date: "2002-11-13",
      title: "Harry Potter and the Chamber of Secrets",
      video: false,
      vote_average: 7.7,
      vote_count: 16393,
    },
  ],
  errorMessage: "",
};

it("should take a snapshot", () => {
  const { asFragment } = render(<Movies movies={movies} />);

  expect(asFragment(<Movies movies={movies} />)).toMatchSnapshot();
});

it("empty results", async () => {
  render(<Movies movies={{ isLoading: false, data: [], errorMessage: "" }} />);

  await waitFor(() => screen.getByText("Oops! No results found"));

  expect(screen.getByText("Oops! No results found"));
});

it("is loading true", async () => {
  render(<Movies movies={{ isLoading: true, data: [], errorMessage: "" }} />);

  await waitFor(() => screen.getByText("Cargando.."));

  expect(screen.getByText("Cargando.."));
});

it("error message", async () => {
  const errorMessage = "error";
  render(<Movies movies={{ isLoading: false, data: [], errorMessage }} />);

  await waitFor(() => screen.getByText(errorMessage));

  expect(screen.getByText(errorMessage));
});
