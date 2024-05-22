'use client'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div className='w-full'>
        <CountUp
            start={0}
            end={amount}
            duration={2.75} // seconds
            separator=","
            decimal="."
            decimals={2}
            prefix="$"
        />
    </div>
  )
}

export default AnimatedCounter