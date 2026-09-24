import { createElement } from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import GoToTopButton from "./components/GoToTopButton";
import Header from "./components/Header";
import Intro from "./concepts/Intro";
import JSX from "./concepts/JSX";
import Components from "./concepts/Components";
import Props from "./concepts/Props";
import UseState from "./concepts/UseState";
import Events from "./concepts/Events";
import ConditionalRendering from "./concepts/ConditionalRendering";
import Lists from "./concepts/Lists";
import Forms from "./concepts/Forms";
import UseEffect from "./concepts/UseEffect";
import UseRef from "./concepts/UseRef";
import UseContext from "./concepts/UseContext";
import LiftingState from "./concepts/LiftingState";
import ControlledVsUncontrolled from "./concepts/ControlledVsUncontrolled";
import Composition from "./concepts/Composition";
import PropDrilling from "./concepts/PropDrilling";
import CustomHooks from "./concepts/CustomHooks";
import UseReducer from "./concepts/UseReducer";
import UseCallbackMemo from "./concepts/UseCallbackMemo";
import LazyLoading from "./concepts/LazyLoading";
import ReactRouter from "./concepts/ReactRouter";
import ErrorBoundaries from "./concepts/ErrorBoundaries";
import ApiFetch from "./concepts/ApiFetch";
import LocalStorage from "./concepts/LocalStorage";
import Deployment from "./concepts/Deployment";

const sections = [
    ["intro", "Intro", Intro],
    ["jsx", "JSX", JSX],
    ["components", "Components", Components],
    ["props", "Props", Props],
    ["usestate", "useState", UseState],
    ["events", "Events", Events],
    ["conditional", "Conditional rendering", ConditionalRendering],
    ["lists", "Lists", Lists],
    ["forms", "Forms", Forms],
    ["useeffect", "useEffect", UseEffect],
    ["useref", "useRef", UseRef],
    ["usecontext", "useContext", UseContext],
    ["liftingstate", "Lifting state", LiftingState],
    ["controlled", "Controlled vs uncontrolled", ControlledVsUncontrolled],
    ["composition", "Composition", Composition],
    ["propdrilling", "Prop drilling", PropDrilling],
    ["customhooks", "Custom hooks", CustomHooks],
    ["usereducer", "useReducer", UseReducer],
    ["usecallbackmemo", "useCallback and useMemo", UseCallbackMemo],
    ["lazyloading", "Lazy loading", LazyLoading],
    ["router", "React Router", ReactRouter],
    ["errorboundary", "Error boundaries", ErrorBoundaries],
    ["apifetch", "API fetch", ApiFetch],
    ["localstorage", "localStorage", LocalStorage],
    ["deployment", "Deployment", Deployment],
];

const App = () => (
    <>
        <Header />
        <Styled.Wrapper>
            <Styled.Intro>
                <span>React study guide</span>
                <h1>React Concepts Notes</h1>
                <p>Practical notes and interactive examples for learning React from JSX basics to advanced patterns.</p>
            </Styled.Intro>

            <Styled.TopicNav aria-label="Concept navigation">
                {sections.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
            </Styled.TopicNav>

            <Styled.Content>
                {sections.map(([id, , component]) => (
                    <section id={id} key={id}>
                        {createElement(component)}
                    </section>
                ))}
            </Styled.Content>

            <GoToTopButton />
        </Styled.Wrapper>
        <Footer />
    </>
);

export default App;

const Styled = {
    Wrapper: styled.main`
        max-width: 980px;
        margin: 0 auto;
        padding: 88px 24px 48px;
    `,
    Intro: styled.section`
        padding: 28px;
        margin-bottom: 18px;
        border: 1px solid #2a2a2a;
        border-radius: 16px;
        background: #111;
        span {
            color: #7db8ff;
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
        }
        h1 {
            margin: 8px 0;
            color: #fff;
            font-size: clamp(2rem, 6vw, 4rem);
            line-height: 1;
        }
        p {
            max-width: 680px;
            color: #aaa;
        }
    `,
    TopicNav: styled.nav`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 24px;
        a {
            padding: 7px 10px;
            color: #aaa;
            border: 1px solid #2a2a2a;
            border-radius: 8px;
            text-decoration: none;
            font-size: 0.82rem;
            transition: color 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
            &:hover,
            &:focus-visible {
                color: #fff;
                border-color: #7db8ff;
                box-shadow: 0 0 12px rgba(125, 184, 255, 0.2);
            }
        }
    `,
    Content: styled.div`
        > section {
            scroll-margin-top: 78px;
        }
    `,
};
