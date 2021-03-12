import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

import LogoImage from "images/logo.svg";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "images/youtube-icon.svg";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'

const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-8 py-20 lg:py-24`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const SixColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12`;

const ColumnHeading = tw.h5`uppercase font-bold`;

const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300`;

const SubscribeNewsletterColumn = tw(Column)`text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`;
const SubscribeNewsletterContainer = tw.div`max-w-sm mx-auto lg:mx-0 `;
const SubscribeText = tw.p`mt-2 lg:mt-6 text-sm font-medium text-gray-600`;
const SubscribeForm = tw.form`mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`;
const Input = tw.input`bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full`;
const SubscribeButton = tw(PrimaryButtonBase)`mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3`;

const Divider = tw.div`my-16 border-b-2 border-gray-300 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-800`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => {
  const [email, setEmail] = useState("");
      
       const [submitButtonText, setsubmitButtonText] = useState("Assinar");
 const handlerForm = async (email) => {
               console.log(email)
    if(!email) {
      return toast.error("Por favor, preencha os campos!")
    }
            const user = {
              email, 
             
             
            }
             setsubmitButtonText("Processando!...")
axios.post('https://grupo-mms.herokuapp.com/api/news-letter', user)
.then(async data => {
  
  toast.success("Obrigado, você se inscreveu com sucesso!")
  console.log(data)
  await setsubmitButtonText("Assinar")
}).
catch(error => {
  if(error) {
     setsubmitButtonText("Assinar")
    return toast.error("Alguma deu errada, por favor volte a tentar!")
  }
})
            
 }
  return (
    <Container>
      <Content>
        <SixColumns>
          <Column>
            <ColumnHeading>Contactos</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="mailto:info@grupomms.org.mz">Info: <strong>info@grupomms.org.mz</strong></Link>
              </LinkListItem>
              <LinkListItem>
              <Link href="mailto:sales@grupomms.org.mz">Vendas: <strong>sales@grupomms.org.mz</strong></Link>
              </LinkListItem>
              <LinkListItem>
                <Link >Telefone: <strong>+258 82 49 4765</strong></Link>
              </LinkListItem>
              
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Serviços:</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link >Atendimento Médico Domiciliar</Link>
              </LinkListItem>
              <LinkListItem>
                <Link >Enfermagem Domiciliar</Link>
              </LinkListItem>
              <LinkListItem>
                <Link >Internação Domiciliar</Link>
              </LinkListItem>
              <LinkListItem>
                <Link >Acompanhante Para Consultas</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            
            <LinkList>
              <LinkListItem>
                <Link >Remoção de Pacientes</Link>
              </LinkListItem>
              <LinkListItem>
                <Link >Cuidador de Idosos</Link>
              </LinkListItem>
              <LinkListItem>
                <Link >Grupo de Apoio a Gestantes e Acompanhamento</Link>
              </LinkListItem>
              <LinkListItem>
                <Link >Grupo de Apoio psicossocial e Acompanhamento</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          
          <SubscribeNewsletterColumn>
            <SubscribeNewsletterContainer>
              <ColumnHeading>Assine a nossa newsletter</ColumnHeading>
              <SubscribeText>
              Entregamos conteudos de alta qualidade escritas por profissionais semanalmente. E não prometemos spam.Entregamos postagens de blog de alta qualidade escritas por profissionais semanalmente. E não prometemos spam.g
              </SubscribeText>
              <SubscribeForm 
                 onSubmit={(e) => {
                  e.preventDefault()
                   setEmail(e.target.email.value)
                  
                  handlerForm(
                    e.target.email.value, 
                    
                    )
                    e.target.reset()
                }}
              >
                <Input type="email" name="email" placeholder="Seu endereço de email" />
                <SubscribeButton type="submit">{submitButtonText}</SubscribeButton>
              </SubscribeForm>
            </SubscribeNewsletterContainer>
          </SubscribeNewsletterColumn>
        </SixColumns>
        <Divider />
        <ThreeColRow>
          <LogoContainer>
            <LogoImg src={LogoImage} />
            <LogoText>Grupo MMS.</LogoText>
          </LogoContainer>
          <CopywrightNotice>&copy; 2021 Grupo MMS LDA. All Rights Reserved.</CopywrightNotice>
          
          
        </ThreeColRow>
      </Content>
      <ToastContainer/>
    </Container>
  );
};
