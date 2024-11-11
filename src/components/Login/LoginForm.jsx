import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, FormControl, FormLabel, Input, } from '@chakra-ui/react'

const LoginForm = ({ handleOpenLoginForm }) => {
  const { control, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    handleOpenLoginForm(data.username)
  }

  return (
    <>
      <>
        <FormControl onSubmit={handleSubmit(onSubmit)} style={{ padding: '0.5vw' }}>
          <FormLabel isRequired> Username:</FormLabel>
           <Input type='Username'/>
        </FormControl>
        <FormControl onSubmit={handleSubmit(onSubmit)} style={{ padding: '0.5vw' }}>
          <FormLabel isRequired> Password: </FormLabel>
           <Input type='password'/>
        </FormControl>
        <Button type='submit'>Go!</Button>
      </>
    </>
  )
}

export default LoginForm