import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import useEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("Greeting Component", () => {
  //   test("Greeting 컴포넌트입니다 라는 텍스트 렌더링을 합니다.", () => {
  //     // Given
  //     render(<Greeting />);
  //     // When
  //     // Then
  //     const GreetingElement = screen.getByText(/Greeting/);
  //     expect(GreetingElement).toBeInTheDocument();
  //   });
  //   test("만나서 반갑습니다 라는 텍스트 렌더링을 합니다.", () => {
  //     // Given
  //     render(<Greeting />);
  //     // When
  //     // Then
  //     const HelloElement = screen.getByText(/만나서 반갑습니다/);
  //     expect(HelloElement).toBeInTheDocument();
  //   });

  test("버튼이 클릭 되었을 때, 바뀌었습니다 가 텍스트 렌더링이 일어난다.", () => {
    // GIVEN
    render(<Greeting />);

    // WHEN
    const buttonElement = screen.getByRole("button");
    act(() => useEvent.click(buttonElement));

    // THEN
    const outputElement = screen.getByText(/바뀌었습니다/);
    expect(outputElement).toBeInTheDocument();
  });
  test("버튼이 클릭 되었을 때, 아직 바뀌기 전입니다 가 텍스트 렌더링이 일어나지 않는다.", () => {
    // GIVEN
    render(<Greeting />);

    // WHEN
    const buttonElement = screen.getByRole("button");
    act(() => useEvent.click(buttonElement));

    // THEN
    const outputElement = screen.queryByText(/아직 바뀌기 전입니다/);
    expect(outputElement).toBeNull();
  });
});
