import React from 'react'

const RuleOfTime = () => {
    return (
        <>
            <div className='rule'>
                <p className='ruleHours'>“연습은 어제의 당신보다 당신을 더 낫게 만든다.”</p>
                <div className='flex-wrap quotes'>
                    <img className='quote-left' />
                    <div className='light'>
                        <p><span className='bold'>1만 시간의 법칙</span>은 </p>
                        <p>어떤 분야의 전문가가 되기 위해서는 </p>
                        <p>최소한 1만 시간의 훈련이 필요하다는 법칙이다.</p>
                    </div>
                    <img className='quote-right' />
                </div>
            </div>
        </>
    )
}
export default RuleOfTime