import React from 'react'
import { Button, Card, Stack } from 'react-bootstrap'
import fb from "./img/fb.svg";
import google from "./img/google.svg"
import apple from './img/apple.svg';
import mail from './img/ion_mail.svg';

const Book = (props) => {
    console.log(props.mt)
  return (
    <Card className={`book_login_sign ${props.mt}`}>
        <h4>Login or Sign up to book</h4>
        <form action="">
            <input type="text" placeholder='Phone Number'/>
            <label className='mt-3 mb-4'>We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy</label>
            <Button className='btn-continue'>
                Continue
            </Button>
            <Stack direction='horizontal' gap={3}>
                <hr className='w-100' />
                <p className='mb-2'>or</p>
                <hr className='w-100' />
            </Stack>

            <div className='social-login'>
                <Stack direction='horizontal' gap={3}>
                    <button><img src={fb} alt="" /></button>
                    <button><img src={google} alt="" /></button>
                    <button><img src={apple} alt="" /></button>
                </Stack>
                <button className='mt-3'><img src={mail} alt="" className='me-1'/> Continue with email</button>
            </div>
        </form>
    </Card>
  )
}

export default Book