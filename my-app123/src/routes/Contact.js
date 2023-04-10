import React, { useState } from 'react';
import { Heading, Box, FormControl, FormLabel, Input, Textarea, Button, FormErrorMessage } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

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
    <Box fontFamily={"times new roman"}>
          <Navbar/>
      <Heading fontFamily={"times new roman"} color="white">Contact</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={nameError}>
          <FormLabel color="white" htmlFor="name">Name:</FormLabel>
          <Input color="white" type="text" id="name" value={name} onChange={handleNameChange} />
          <FormErrorMessage>Name is required</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={emailError}>
          <FormLabel color="white" htmlFor="email">Email:</FormLabel>
          <Input color="white" type="email" id="email" value={email} onChange={handleEmailChange} />
          <FormErrorMessage>Invalid email address</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel color="white" htmlFor="message">Message:</FormLabel>
          <Textarea color="white" id="message" value={message} onChange={handleMessageChange} />
        </FormControl>
        <Button type="submit" mt={4}>Submit</Button>
      </form>
    </Box>
  );
}

export default ContactForm;