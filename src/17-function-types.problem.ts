import { Equal, Expect } from "./helpers/type-utils";

/**
 * How do we type onFocusChange?
 */
// type TFocusChange = {
//   (isFocused: boolean): void;
// };
type TFocusChange = (isFocused: boolean) => void;
// const addListener = (onFocusChange: (isFocused: boolean) => void) => {
//   window.addEventListener("focus", () => {
//     onFocusChange(true);
//   });

//   window.addEventListener("blur", () => {
//     onFocusChange(false);
//   });
// };
const addListener = (onFocusChange: TFocusChange) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
