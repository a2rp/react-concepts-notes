import React from 'react'
import Intro from './concepts/Intro'
import styled from 'styled-components'
import JSX from './concepts/JSX'
import Components from './concepts/Components'
import Props from './concepts/Props'
import UseState from './concepts/UseState'
import Events from './concepts/Events'
import GoToTopButton from './components/GoToTopButton'
import ConditionalRendering from './concepts/ConditionalRendering'
import Lists from './concepts/Lists'
import Forms from './concepts/Forms'
import UseEffect from './concepts/UseEffect';
import UseRef from './concepts/UseRef';
import UseContext from './concepts/UseContext';
import LiftingState from './concepts/LiftingState';
import ControlledVsUncontrolled from './concepts/ControlledVsUncontrolled';
import Composition from './concepts/Composition';
import PropDrilling from './concepts/PropDrilling';
import CustomHooks from './concepts/CustomHooks';

const App = () => {
    return (
        <>
            <Styled.Wrapper>
                <h1>📘 React Concepts & Tutorials</h1>
                <p>Master every ReactJS concept — from JSX and components to advanced hooks — with clear notes and interactive examples.</p>


                <>
                    <ol>
                        <li><a href="#intro">Intro</a></li>
                        <li><a href="#jsx">JSX</a></li>
                        <li><a href="#components">Components</a></li>
                        <li><a href="#props">Props</a></li>
                        <li><a href="#usestate">usestate</a></li>
                        <li><a href="#events">events</a></li>
                        <li><a href="#conditional">conditional</a></li>
                        <li><a href="#lists">lists</a></li>
                        <li><a href="#forms">forms</a></li>
                        <li><a href="#useeffect">useEffect</a></li>
                        <li><a href="#useref">useRef</a></li>
                        <li><a href="#usecontext">useContext</a></li>
                        <li><a href="#liftingstate">lifting state</a></li>
                        <li><a href="#controlled">controlled vs uncontrolled</a></li>
                        <li><a href="#composition">composition</a></li>
                        <li><a href="#propdrilling">prop drilling</a></li>
                        <li><a href="#customhooks">custom hooks</a></li>
                    </ol>
                </>

                <>
                    <a name="intro"><Intro /></a>
                    <a name="jsx"><JSX /></a>
                    <a name="components"><Components /></a>
                    <a name="props"><Props /></a>
                    <a name="usestate"><UseState /></a>
                    <a name="events"><Events /></a>
                    <a name="conditional"><ConditionalRendering /></a>
                    <a name="lists"><Lists /></a>
                    <a name="forms"><Forms /></a>
                    <a name="useeffect"><UseEffect /></a>
                    <a name="useref"><UseRef /></a>
                    <a name="usecontext"><UseContext /></a>
                    <a name="liftingstate"><LiftingState /></a>
                    <a name="controlled"><ControlledVsUncontrolled /></a>
                    <a name="composition"><Composition /></a>
                    <a name="propdrilling"><PropDrilling /></a>
                    <a name="customhooks"><CustomHooks /></a>
                </>

                <GoToTopButton />
            </Styled.Wrapper>
        </>
    )
}

export default App

const Styled = {
    Wrapper: styled.div`
        /* border: 1px solid #f00; */
        max-width: 700px;
        margin: 0 auto;
        padding: 50px;
        @media (width<600px) {
            padding: 15px;
        }

        ol {
            /* list-style: none; */
            margin-top: 15px;
            margin-bottom: 50px;
            display: flex;
            flex-wrap: wrap;

            li {
                margin: 0 30px;
            }
        }
    `,
};
