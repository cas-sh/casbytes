import { jestPreviewConfigure } from "jest-preview";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
// import { server } from "./app/mocks/server";
// import "./app/tailwind.css";

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

jestPreviewConfigure({
  autoPreview: true,
});
