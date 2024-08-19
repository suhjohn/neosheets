// jest.setup.ts

// Extend Jest matchers with jest-dom for testing DOM nodes
import "@testing-library/jest-dom";

// Optionally, mock certain modules if needed for your project
jest.mock("@remix-run/react", () => {
  const actual = jest.requireActual("@remix-run/react");

  return {
    ...actual,
    useLoaderData: jest.fn(() => ({})), // Mocking a Remix hook example
    useActionData: jest.fn(() => ({})),
  };
});

// Add other global mocks or setup configurations as needed.
