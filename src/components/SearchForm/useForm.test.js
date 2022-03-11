import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-test-renderer";
import useForm from "./useForm";

const setup = (params) => renderHook(() => useForm(params));

test("should change searchword", () => {
  const { result } = setup();

  act(() => {
    result.current.updateSearchWord("twice");
  });

  expect(result.current.searchWord).toBe("twice");
});

test("should use initial values", () => {
  const { result } = setup({ initialWord: "shrek" });

  expect(result.current.searchWord).toBe("shrek");
});

test("should update correctly times when used twice", () => {
  const { result } = setup();

  act(() => {
    result.current.updateSearchWord("t");
    result.current.updateSearchWord("te");
  });

  expect(result.current.searchWord).toBe("te");
  expect(result.current.times).toBe(2);
});
