import { forceRgbNonSpacedSyntax } from "./force-rgb-non-spaced-syntax";
test("forceRgbNonSpacedSyntax", () => {
  const css = `.bg-red-500{
  background-color: rgb(239 68 68 / 1);
  color: rgb(239 68 68 / 0.1)
}`;
  expect(forceRgbNonSpacedSyntax(css)).toBe(`.bg-red-500{
  background-color: rgb(239,68,68);
  color: rgb(239,68,68,0.1)
}`);
});
