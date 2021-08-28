import { screen, render } from "@testing-library/react";
import { Alert } from "./Alert";

test("render", () => {
    render(<Alert text={"Hello World"} type={"Info"} canDismiss={false} />);
    const isRendering = screen.getByText(/Hello World/i);
    expect(isRendering).toBeInTheDocument();
});

test("Render dismiss button", () => {
    const renderResult = render(<Alert text={"Hello World"} type={"Info"} canDismiss={true} />);
    const elements = renderResult.container.getElementsByClassName("btn-close");
    expect(elements.length).toBe(1);
});