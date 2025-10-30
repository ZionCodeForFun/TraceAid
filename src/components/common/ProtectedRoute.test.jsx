import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import ProtectedRoute from "./ProtectedRoute";

const mockStore = configureStore([]);

describe("ProtectedRoute", () => {
  it("redirects to login when not authenticated", () => {
    const store = mockStore({ auth: { token: null, role: null } });
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/admindashboard"]}>
          <ProtectedRoute allowedRole={"admin"}>
            <div>Admin Content</div>
          </ProtectedRoute>
        </MemoryRouter>
      </Provider>
    );

    // Since ProtectedRoute uses Navigate, render won't show the children.
    expect(container.textContent).not.toContain("Admin Content");
  });

  it("renders children when authenticated as admin", () => {
    const store = mockStore({ auth: { token: "abc", role: "admin" } });
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ProtectedRoute allowedRole={"admin"}>
            <div>Admin Content</div>
          </ProtectedRoute>
        </MemoryRouter>
      </Provider>
    );

    expect(getByText("Admin Content")).toBeTruthy();
  });
});
