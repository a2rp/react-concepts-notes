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

            li {
                margin: 0 30px;
            }
        }
    `,
};
