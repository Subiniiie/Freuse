import React from 'react'
import SignUpSubmitBtn from '../../atoms/Auth/Signup/SignUpSubmitBtn';

type SignUpBtnsProps = {
    submitSignupForm: () => void;
}

export default function SignUpBtns({ submitSignupForm }: SignUpBtnsProps) {

    return (
         <SignUpSubmitBtn submitSignupForm={submitSignupForm} />
    )
}
