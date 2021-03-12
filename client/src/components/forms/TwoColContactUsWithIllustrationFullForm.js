import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`
 
export default ({
  subheading = "Entre em contacto",
  heading = <>Sinta-se livre para <span tw="text-primary-500">entrar em contato </span><wbr/>conosco.</>,
  description = "Estamos sempre disponíveis para atender suas ligações e esclarecer suas dúvidas.",
  
  textOnLeft = true,
}) => {
       const [email, setEmail] = useState("");
       const [phone, setPhone] = useState("");
       const [firstName, setFirstName] = useState("");
       const [lastName, setLastName] = useState("");
       const [subject, setSubject] = useState("");
       const [message, setMessage] = useState("");
       const [submitButtonText, setsubmitButtonText] = useState("Enviar");
 const handlerForm = async (email, 
  phone,
  firstName,
  lastName,
  subject,
  message) => {

    if(!email || !phone || !firstName || !lastName || !subject || !message) {
      return toast.error("Por favor, preencha os campos!")
    }
            const user = {
              email, 
              phone,
              firstName,
              lastName,
              subject,
              message
            }
             setsubmitButtonText("Aguarde por favor!...")
axios.post('https://grupo-mms.herokuapp.com/api/new-contact', user)
.then(async data => {
  
  toast.success("A sua mensagem foi enviada com sucesso!")
  await setsubmitButtonText("Enviar")
}).
catch(error => console.log(error))
            
 }
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form onSubmit={(e) => {
                e.preventDefault()
                 setEmail(e.target.email.value)
                 setPhone(e.target.phone.value)
                 setFirstName(e.target.firstName.value)
                 setLastName(e.target.lastName.value)
                 setSubject(e.target.subject.value)
                 setMessage(e.target.message.value)
                handlerForm(
                  e.target.email.value, 
                  e.target.phone.value, 
                  e.target.firstName.value,
                  e.target.lastName.value,
                  e.target.subject.value,
                  e.target.message.value
                  )
                  e.target.reset()
              }}>
              
              <Input type="email" name="email" placeholder="Seu Email" />
              <Input type="text" name="phone" placeholder="Telefone" />
              <Input type="text" name="firstName" placeholder="Primeiro Nome" />
              <Input type="text" name="lastName" placeholder="Apelido" />
              <Input type="text" name="subject" placeholder="Assunto" />
              <Textarea name="message" placeholder="Sua mensagem" />
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
              
              
            </Form>

            
          </TextContent>
        </TextColumn>
      </TwoColumn>
      <ToastContainer />
    </Container>
  );
};
