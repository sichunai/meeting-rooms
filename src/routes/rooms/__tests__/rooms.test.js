import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from "@testing-library/react";
import Rooms from "../index";

describe("Rooms tests", () => {
  let originFetch;
  beforeEach(() => {
    originFetch = global.fetch;
    const fakeResponse = {
      rooms: [
        {
          name: "Ljerka",
          spots: 43,
          thumbnail:
            "https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80",
        },
        {
          name: "Mostafa",
          spots: 4,
          thumbnail:
            "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        },
      ],
    };
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
    global.fetch = mockedFetch;
  });
  afterEach(() => {
    global.fetch = originFetch;
  });
  it("should render a room card once data is loaded", async () => {
    render(<Rooms />);
    const div = await screen.findAllByTestId("room-name-test");
    expect(div[0]).toHaveTextContent("Ljerka");
  });

  it("should handle click boom room btn", async () => {
    render(<Rooms />);
    const btnElement = await screen.findAllByTestId("room-book-btn-test");
    fireEvent.click(btnElement[0]);
    const snackBarElement = await screen.findByTestId("snackbar-test");
    expect(snackBarElement).toBeInTheDocument();
  });

  it("should handle onclose of alert", async () => {
    render(<Rooms />);
    const btnElement = await screen.findAllByTestId("room-book-btn-test");
    fireEvent.click(btnElement[0]);
    const snackBarElement = await screen.findByTestId("snackbar-test");
    const alertElement = await screen.findByTestId("alert-test");
    const alertCloseBtn = within(alertElement).getByRole("button");
    fireEvent.click(alertCloseBtn);
    await waitForElementToBeRemoved(snackBarElement);
    expect(snackBarElement).not.toBeInTheDocument();
  });
});
