import React, { useState } from 'react';
import { Heading, Box, FormControl, FormLabel, Input, Textarea, Button, FormErrorMessage } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '') {
      setNameError(true);
      return;
    } else if (email === '') {
      setEmailError(true);
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      return;
    } else {
      // submit the form
      console.log('Form submitted:', { name, email, message });


          // save to state
    setName('');
    setEmail('');
    setMessage('');

    // save to session storage
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('message', message);
    
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
  <>  <Box fontFamily={"times new roman"}>
          <Navbar color="white"/>
      <Heading fontFamily={"times new roman"} color="white">Contact</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl padding="10px" isInvalid={nameError}>
          <FormLabel display="left"  color="white" htmlFor="name">Name:</FormLabel>
          <Input   width =" 200px" color="white" type="text" id="name" value={name} onChange={handleNameChange} />

          <FormErrorMessage>Name is required</FormErrorMessage>
        </FormControl>
        <FormControl padding="10px" isInvalid={emailError}>
          <FormLabel display="left"  color="white" htmlFor="email">Email:</FormLabel>
          <Input   width =" 200px" color="white" type="email" id="email" value={email} onChange={handleEmailChange} />

          <FormErrorMessage>Invalid email address</FormErrorMessage>
        </FormControl>

        <FormControl padding="10px">
          <FormLabel display="left" color="white" htmlFor="message">Message:</FormLabel>
          <Textarea  width =" 200px" color="white" id="message" value={message} onChange={handleMessageChange} />
        </FormControl>

        <Button type="submit" mt={4}>Submit</Button>
      </form>
    </Box>
   <Footer/> </>
  );
}

export default ContactForm;