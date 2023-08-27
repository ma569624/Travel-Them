import React from 'react'
import { Card, Stack } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const PayType = (props) => {
  return (
    <Card className={`p-3 pay-type ${props.mt}`}>
        <Stack direction='horizontal' className='justify-content-between p-2 bg-success'>
            <div>
                <h4>Pay in full</h4>
                <span>Pay the total and you are all set</span>
            </div>
            <input type="radio" />
        </Stack>
        <Stack direction='horizontal' className='justify-content-between p-2'>
            <div>
                <h4>Pay part now, part later</h4>
                <span>Pay $207.43 now, and the rest ($207.43) will be automatically charged to the same payment method on Nov 14, 2022. No extra fees.</span>
            </div>
            <input type="radio" />
        </Stack>
        
        <NavLink className={'ps-2'}>
            More info
        </NavLink>
    </Card>
  )
}

export default PayType