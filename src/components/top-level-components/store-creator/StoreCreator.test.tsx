import React from "react";
import StoreCreator from "./StoreCreator";
import {
  getStore,
  renderWithRedux,
} from "../../../configs/test-setup/mock-redux";

describe("Dashboard Component", () => {
  it("should render with text", () => {
    const dashboard = renderWithRedux(<StoreCreator />, getStore({}, null));

    expect(dashboard.getByText("Store Creator")).toBeInTheDocument();
  });
});
