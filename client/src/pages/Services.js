import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";


import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Blog from "components/blogs/GridWithFeaturedPost.js";
import ServiceContent from "components/ServiceContents/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStartedLight.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

const HighlightedText = tw.span`text-primary-500`

export default () => {
  return (
    <AnimationRevealPage>
      <Hero imageSrc="https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
      
    
      <ServiceContent 
     description={<>A assistência médica em domicílio funciona oferecendo serviços de cuidados
      hospitalares na casa do paciente, <strong>Cuidados Ambulatoriais</strong>: o paciente recebe a visita de
      enfermeiros, <strong>Internação Domiciliar</strong>: os pacientes mais estáveis podem contar com a
      internação domiciliar como uma opção.</>}
        heading={<>Atendimento Médico  <HighlightedText>Domiciliar</HighlightedText></>}
      />



<ServiceContent 
   imageSrc="https://res.cloudinary.com/savanapoint/image/upload/v1615468344/undraw_doctor_kw5l_yobtqk.svg"
      description="O paciente tem o suporte de saúde necessário para viver e se recuperar, até com
      cuidados mais específicos, como banho, lavar e passar a roupa, limpeza e organização
      quarto do paciente em domicílio etc."
        heading={<>Enfermagem  <HighlightedText>Domiciliar</HighlightedText></>}
      />

<ServiceContent 
imageSrc="https://res.cloudinary.com/savanapoint/image/upload/v1615469036/undraw_medicine_b1ol_lbacto.svg"
      description="A internação domiciliar se trata de um conjunto de ações realizadas em domicílio,
      caracterizadas pela atenção ao paciente com maior complexidade assistencial e
      necessidade de serviços de técnico de enfermagem nos regimes de 12 ou 24 horas.
      Podem ser necessários equipamentos para a manutenção do tratamento."
        heading={<>Internação  <HighlightedText>Domiciliar</HighlightedText></>}
      />

<ServiceContent 
      imageSrc="https://res.cloudinary.com/savanapoint/image/upload/v1615469232/undraw_conversation_h12g_am2hmj.svg"
      description="Visando o conforto e segurança, O Grupo MMS, se dispôs a buscar especialistas
      qualificados para exercer a tarefa de acompanhantes para consultas. Nosso serviço
      inclui dar assistência durante o percurso, fazer companhia em consultas e exames com
      toda proteção, carinho e um atendimento humanizado, respeitando as necessidades
      físicas, emocionais e culturais de cada paciente, bem como suas idades e limitações."
        heading={<>Acompanhante Para   <HighlightedText>Consultas</HighlightedText></>}
      />

<ServiceContent 
imageSrc="https://res.cloudinary.com/savanapoint/image/upload/v1615340775/4136673_lktq3f.jpg"

      description="A busca por um Cuidador de Idosos tem crescido em paralelo ao aumento da esperança
      de vida das pessoas, pois ele é capaz de promover mais saúde e bem-estar a elas. Dados
      indicam que até 2050 serão mais de 9 milhões de Moçambicanos com mais de 60 anos
      e as características dessa fase da vida exigem cuidados especiais que o profissional está
      apto a realizar."
        heading={<>Cuidador de     <HighlightedText>Idosos</HighlightedText></>}
      />

<ServiceContent 
      description="Para proporcionar soluções completas aos seus clientes, O Grupo MMS, disponibiliza,
      além de serviços diferenciados em domicílio, o serviço de remoção de pacientes, com
      todo o suporte necessário para garantir a locomoção do paciente entre sua residência e
      hospitais ou clínicas, com total segurança, eficiência e agilidade."
      imageSrc="https://res.cloudinary.com/savanapoint/image/upload/v1615469982/undraw_medical_research_qg4d_isbqix.svg"

      
        heading={<>Remoção de    <HighlightedText>Pacientes</HighlightedText></>}
      />
      <ServiceContent 
      description="Actualmente ter um parto normal sem intervenções e com o maior respeito possível
      ainda não é tão simples. É necessário saber de tudo o que pode acontecer durante o
      trabalho de parto e parto e, planear um parto sobre suas escolhas e vontades. Um dos
      objetivos do GAP é de dar informações baseadas em evidências científicas. para a
      tomada de decisões durante o período gestacional, parto, pós-parto e amamentação."
      imageSrc="https://res.cloudinary.com/savanapoint/image/upload/v1615470622/4263290_qmv9hk.jpg"

        heading={<>Grupo de Apoio a     <HighlightedText>Gestantes e Acompanhamento</HighlightedText></>}
      />
      <ServiceContent 
      description="Efetuado com Psicólogo e Assistente Social e visa uma integração de ambos os campos
      técnicos para uma abordagem assistencial integrada. Visitas de Apoio Domiciliário,
      Consultas de acompanhamento psicológico e atendimento personalizado e especializado em diversas psicopatologias, visando identificar conflitos emocionais e
      sintomatologia relacionada com as vivências traumáticas"
      imageSrc="https://res.cloudinary.com/savanapoint/image/upload/v1615470968/5492_ddi2yq.jpg"

        heading={<>Grupo de Apoio    <HighlightedText>psicossocial e Acompanhamento</HighlightedText></>}
      />
     
     <ServiceContent 
      description="Actua na prevenção e tratamento de patologias relacionadas à comunicação, inclusive
      problemas relacionados à fala e o aperfeiçoamento dos aspectos fonoaudiológicos: da
      função auditiva periférica e central, distúrbios do processamento auditivo e da
      linguagem oral e escrita, motricidade orofacial, voz, respiração, mastigação e deglutição,
      como dificuldades de comunicação que interferem de forma negativa na aprendizagem."
      imageSrc="https://res.cloudinary.com/savanapoint/image/upload/v1615475978/20944983_aomqsq.jpg"
        heading={<>Fonoaudiologia     <HighlightedText>Domiciliar</HighlightedText></>}
      />


    <ServiceContent 
      description="Serviços como a Fisioterapia Massagem Domiciliar auxiliam na saúde do paciente e no
      aumento da expectativa de vida. Segundo o INE, (Instituto Nacional de Estatística), a
      expectativa de vida do Moçambicano chegou aos 48 anos, o maior desde 1960. Com
      isso, o atendimento domiciliar é fundamental para os cuidados adequados na promoção
      da vida."
      imageSrc="https://res.cloudinary.com/savanapoint/image/upload/v1615476372/19198587_xxal2r.jpg"
        heading={<>Fisioterapia e      <HighlightedText>Massagem Domiciliar</HighlightedText></>}
      />

<ServiceContent 
      description="A visita do nutricionista domiciliar pode auxiliar desde pacientes com deficiências
      nutricionais e os que desejam ou necessitem de reeducação alimentar, até gestantes,
      obesos e/ou ex-obesos, pacientes com transtorno alimentar, vegetarianos, em período
      pré ou pós-operatório de cirurgia bariátrica, com síndrome intestinal, hipertensão, entre
      outras patologias."
      imageSrc="https://res.cloudinary.com/savanapoint/image/upload/v1615476815/Wavy_Lst-05_Single-04_ldls8e.jpg"
        heading={<>Nutrici<HighlightedText>onistas</HighlightedText></>}
      />

<ServiceContent 
      description="Preparam refeições e prestam assistência às pessoas, cuidam de peças do vestuário
      como roupas e sapatos e colaboram na administração da casa, conforme orientações
      recebidas. Fazem arrumação ou faxina."
        heading={<>Apoio Com Tarefas de Casa <HighlightedText> (Empregadas Domesticas)</HighlightedText></>}
        imageSrc="https://res.cloudinary.com/savanapoint/image/upload/v1615477184/52060_iyal4m.jpg"
        
      />
      

      <ServiceContent 
      description="A COVID-19 trouxe como uma de suas consequências a necessidade de reorganização
      dos sistemas de saúde. A Atenção Domiciliar (AD) se apresenta como opção para:
      interromper a transmissão; identificação precoce e cuidado de pacientes infectados;
      possibilidade de alta precoce e continuidade do cuidado fora do hospital. É necessário
      manter as pessoas em casa, evitar a exposição ao risco, e manter o papel de vigilância."
      heading={<>Realização de Testes de COVID 19 e  <HighlightedText> Internação Domiciliar</HighlightedText></>}
      imageSrc="https://res.cloudinary.com/savanapoint/image/upload/v1615477392/3801170_rjrx56.jpg"
      />

      <ServiceContent 
      description="O GRUPO MMS oferece como diferencial atuação em aluguel de materiais e
      equipamentos com logística para entrega dos produtos em domicílio, para proporcionar
      mais comodidade e conforto aos seus clientes. Entre esses produtos, dispomos:
      Cama hospitalar (manual e motorizada)
      Cadeira higiênica e de roda
      Oxigênio e Concentrador de oxigênio
      Suporte de soro e frasco para dieta
      Andarilhos e Muletas"
      imageSrc="https://res.cloudinary.com/savanapoint/image/upload/v1615477594/7774_lcnwoe.jpg"
        heading={<>Venda e Aluguel de Materiais e  <HighlightedText> Equipamentos Médicos</HighlightedText></>}
      />
      
      <Footer />
    </AnimationRevealPage>
  );
}
