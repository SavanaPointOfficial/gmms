import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/ServiceContents/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";
import { ToastContainer, toast } from 'react-toastify';

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  
  return (
    <AnimationRevealPage disabled>
      <Hero
        heading={<>Paz de Espirito <HighlightedText>Confiança e Conforto</HighlightedText></>}
        description="Toda a família, incluindo o próprio paciente, ficam mais tranquilos sabendo que a casa poderá oferecer o conforto e a estrutura que o paciente precisa."
        imageSrc="https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Falar com Especialista"
        watchVideoButtonText="Familia Saudavel é Alegre"
      />
      <MainFeature
        // subheading={<Subheading>Established Since 2014</Subheading>}
        heading={
          <>
          
            Reduz o Sentimento de
            <wbr /> <HighlightedText>Isolamento</HighlightedText>
          </>
        }
        description={
          <Description>
            O sentimento de isolamento ou abandono pode ser um agravante para o estado de saúde física e mental dos pacientes. Os cuidados em domicílio podem garantir que o paciente ou idoso seja assistido 24 horas por dia e ainda siga a rotina normal da casa.
            <br />
            
            
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Saber Mais"
        imageSrc={
          "https://res.cloudinary.com/savanapoint/image/upload/v1615340775/4136673_lktq3f.jpg"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Nossos  <HighlightedText>Serviços.</HighlightedText>
          </>
        }
      />
      
      
      <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={<>Por Que Optar Pelo Serviço de
            <HighlightedText>Atendimento Domiciliar? </HighlightedText></>}
        
        description="Não existe lugar melhor do que a sua casa, certo? Principalmente quando se está doente ou já é idoso. A tecnologia em saúde disponível hoje nos permite levar para a casa o melhor da assistência médica e suporte de saúde, sem gastar milhões em uma estrutura hospitalar, além de garantir a efetividade do serviço."
        primaryButtonText="Socilitar atendendimento"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://res.cloudinary.com/savanapoint/image/upload/v1615347236/undraw_quality_time_wiyl_neastg.svg"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      
      <Footer />
    </AnimationRevealPage>
  );
}
