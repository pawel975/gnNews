
import { render, screen, fireEvent} from "@testing-library/react";
import App from "../App"
import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import i18n from '../i18n';

/**
* @vitest-environment jsdom
*/

export const MockApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    )
}

render(<MockApp/>)

describe("<App/>", () => {

    test("renders properly", () => {
        expect(screen.getByTestId("app")).not.toBe(null);
    })

    test("renders header properly", () => {
        expect(screen.getByTestId("header")).not.toBe(null);
    })

    test("renders footer properly", () => {
        expect(screen.getByTestId("footer")).not.toBe(null);
    })
})

describe("<SideMenu/>", () => {
    test("is not visible on first render", () => {
        expect(screen.queryByTestId("side-menu")).toBe(null);
    })

    test("is opened on header hamburger icon click", () => {
        expect(screen.queryByTestId("side-menu")).toBe(null);

        fireEvent.click(screen.getByTestId("open-side-menu-icon"))

        expect(screen.queryByTestId("side-menu")).not.toBe(null);

    })

    test("is closed on header hamburger icon click", () => {
        expect(screen.queryByTestId("side-menu")).not.toBe(null);
        fireEvent.click(screen.getByTestId("open-side-menu-icon"));
        expect(screen.queryByTestId("side-menu")).toBe(null);
    })

    test("is closed on side menu cross button click", () => {

        fireEvent.click(screen.getByTestId("open-side-menu-icon"))

        expect(screen.getByTestId("side-menu")).not.toBe(null);

        fireEvent.click(screen.getByTestId("side-menu-close-cross"))

        expect(screen.queryByTestId("side-menu")).toBe(null);

    })

})

describe("<Header/>", () => {
    test("renders conclusions button properly", () => {
        expect(screen.getByTestId("open-conclusions-button")).not.toBe(null)
    })

    test("conclusions button opens popup with conlusions content", () => {
        fireEvent.click(screen.getByTestId("open-conclusions-button"));
        expect(screen.getByTestId('popup')).not.toBe(null)
    })
})
