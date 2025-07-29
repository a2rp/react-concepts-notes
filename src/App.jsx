import React from 'react'
import Intro from './concepts/Intro'
import styled from 'styled-components'
import JSX from './concepts/JSX'
import Components from './concepts/Components'
import Props from './concepts/Props'
import UseState from './concepts/UseState'
import Events from './concepts/Events'

const App = () => {
    return (
        <>
            <Styled.Wrapper>
                <Intro />
                <JSX />
                <Components />
                <Props />
                <UseState />
                <Events />
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
    `,
};
