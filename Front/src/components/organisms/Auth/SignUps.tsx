import React from 'react'
import SignUpInputs from '../../molecules/Auth/SignUpInputs'
import SignUpBtns from '../../molecules/Auth/SignUpBtns'
import useSignup from '../../../hooks/Auth/Signup/useSignup'

export default function SignUps() {
  const { handleChange, getValueIndex, getFieldIndex, submitSignupForm } = useSignup();

  return (
    <>
      <SignUpInputs 
        handleChange={handleChange}
        getValueIndex={getValueIndex}
        getFieldIndex={getFieldIndex}
      />
      <SignUpBtns 
        submitSignupForm={submitSignupForm}
      />
    </>
  )
}