import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Connect() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ulk3eyf",
        "template_zqb0wuh",
        form.current,
        "4a6GhZnFUCi5KY2oK"
      )
      .then(
        (result) => {
          alert("Thanks for contact me");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (

<div id="contact">



    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
   
    >
       
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
         <h2 style={{textAlign:"center",marginTop:"10px",fontFamily:"Rubik Distressed",color:"brown"}}>Connect Me</h2>
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Enter Details
        </Heading>
        <form ref={form} onSubmit={sendEmail}>
          <FormControl id="email" isRequired>
            <FormLabel>Enter Name</FormLabel>
            <Input
              placeholder="Enter Your Name"
              _placeholder={{ color: "gray.500" }}
              type="text"
              name="user_name"
            />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Enter Subject</FormLabel>
            <Input
              placeholder="Enter Subject"
              _placeholder={{ color: "gray.500" }}
              type="text"
              name="user_subject"
            />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
              name="user_email"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Send Message</FormLabel>
            <Textarea type="text" name="message" />
          </FormControl>
          <Stack spacing={6}>
            <Input
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              type="submit"
              value="Send"
              className="button"
              name="send"
            />
          </Stack>
        </form>
      </Stack>
    </Flex>
    </div>
  );
}
