import React, { useState } from 'react'
import ImagePicker from 'react-native-image-crop-picker';

export default function ProfileImage() {

    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
    }).then(image => {
        console.log('프로필 이미지', image);
    });

    return (
        <>
        </>
    )
    }