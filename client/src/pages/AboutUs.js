import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";

import Features from "components/features/ThreeColSimple.js";

import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>Sobre Grupo MMS</Subheading>}
        heading="Sobre Grupo MMS. Visão"
        buttonRounded={false}
        
        description="O GRUPO MMS – MAFUCA MULTI SERVICE, LDA. É uma empresa Moçambicana de saúde com o objectivo de fortalecer o bem-estar do paciente. Motivado pelo grande volume de internações, que ocupam muitos leitos, além de uma redução significativa de infecções hospitalares."
        imageSrc="https://res.cloudinary.com/savanapoint/image/upload/v1615415533/undraw_doctors_hwty_e6xkcb.svg"
      />
      <MainFeature1
        subheading={<Subheading>Os Nossos Valores</Subheading>}
        heading="Os Nossos Valores"
        buttonRounded={false}
       description="É uma empresa que valoriza o bem-estar e saúde do paciente relacionado aos serviços de assistência médica domiciliar. Desde enfermagem, cuidados com idosos, fisioterapia, visita médica, psicologia, fonoaudiologia, nutricionista, entre outros. A empresa disponibiliza acompanhantes para consultas hospitalares; venda e aluguel de equipamentos hospitalares e serviços empresariais relacionados à saúde e bem-estar."
        imageSrc="https://res.cloudinary.com/savanapoint/image/upload/v1615415664/undraw_personal_trainer_ote3_zipvgn.svg"
        textOnLeft={false}
      />
     
     
      <Footer />
    </AnimationRevealPage>
  );
};
