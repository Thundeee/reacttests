import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userSchema } from '../utils/yupSchema';


let information = [];
function FormStuff() {
  const { register, handleSubmit, formState: {errors } } = useForm({
    resolver: yupResolver(userSchema),
  });

  function onSubmit(data) {

    information.push(data);
    console.log(data);
    console.log(information)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        
       <h4>Full Name</h4> 
      <input {...register('fullName')} />
      <p>{errors.fullName?.message}</p>
        <h4>Email</h4>
      <input {...register('email')} />
      <p>{errors.email?.message}</p>
        <h4>Subject</h4>
      <input {...register('subject')} />
      <p>{errors.subject?.message}</p>
        <h4>Body</h4>
      <input {...register('body')} />
      <p>{errors.body?.message}</p>
      <input type="submit" />
    </form>

  );
}

export default FormStuff;