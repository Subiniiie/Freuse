import React from 'react'
import SignUpInputs from '../../molecules/Auth/SignUpInputs'
import SignUpAlert from '../../atoms/Auth/Signup/SignUpAlert'
import SignUpBtns from '../../molecules/Auth/SignUpBtns'
import useSignup from '../../../hooks/Auth/Signup/useSignup'
import SignUpInputImage from '../../atoms/Auth/Signup/SignUpInputImage'


export default function SignUps() {
  const { handleChange, getValueIndex, getFieldIndex, submitSignupForm, selectProfileImage, visible } = useSignup();

  return (
    <>
      <SignUpInputs 
        handleChange={handleChange}
        getValueIndex={getValueIndex}
        getFieldIndex={getFieldIndex}
      />
      <SignUpInputImage 
        selectProfileImage={selectProfileImage}
      />
      <SignUpBtns 
        submitSignupForm={submitSignupForm}
      />
      {visible && <SignUpAlert />}
    </>
  )
}