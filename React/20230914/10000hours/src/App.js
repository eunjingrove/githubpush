import React from 'react'
import TrainingDay from './TrainingDay';
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-components'
import './App.css'

const GlobalStyle = createGlobalStyle`
  ${reset}
`
const Title = () => {
  return (
    <h1 className='title-wrap'>
      <img className='title' />
      <img className='time' />
    </h1>
  )
}

const Weniv = () => {
  return (
    <footer>
      <img class='wenivImg' />
      <div className='footer-info'>
        <p>※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.</p>
        <p>수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.</p>
      </div>
    </footer>
  )
}

const RuleOfTime = () => {
  return (
    <>
      <div className='rule'>
        <p className='ruleHours'>“연습은 어제의 당신보다 당신을 더 낫게 만든다.”</p>
        <div className='flex-wrap'>
          <span class='quotes'>"</span>
          <div className='info light'>
            <p><span className='bold'>1만 시간의 법칙</span>은 </p>
            <p>어떤 분야의 전문가가 되기 위해서는 </p>
            <p>최소한 1만 시간의 훈련이 필요하다는 법칙이다.</p>
          </div>
          <span class='quotes'>"</span>
        </div>
      </div>
    </>
  )
}


function App() {
  return (
    <>
      < Title />
      <RuleOfTime />
      <TrainingDay />
      <Weniv />
    </>
  )
}

export default App