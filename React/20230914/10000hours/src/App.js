import React from 'react'
import Title from './components/Title';
import RuleOfTime from './components/RuleOfTime';
import TrainingDay from './components/TrainingDay';
import Weniv from './components/Weniv';
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-components'
import './App.css'

const GlobalStyle = createGlobalStyle`
  ${reset}
`
function App() {
  return (
    <>
      <Title />
      <RuleOfTime />
      <TrainingDay />
      <Weniv />
    </>
  )
}

export default App