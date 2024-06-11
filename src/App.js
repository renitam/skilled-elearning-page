import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import { Button, Button2, Button3, Navbar, Logo, CardLeadText, Body, CalltoAction, CardLead, Card, CardLogo, CardText, CardHeading, Nav, Header, Main, Footer, IntroHeading, IntroText, HeroImg } from './styles/global';
import skilledlight from './images/logo-dark.svg';
import skilleddark from './images/logo-light.svg';
import favicon from './images/favicon-32x32.png';
import { carddata } from './constants/constants';

const renderCards = () => {
  return carddata.map((card) => {
    <Card key={card.key}>
      <CardLogo src={card.logo} alt={card.alt} />
      <CardHeading>{card.heading}</CardHeading>
      <Body>{card.body}</Body>
      <CalltoAction>Get Started</CalltoAction>
    </Card>
  });
}

function App() {
  return (
    <>
      <Helmet>
        <title>Skilled E-Learning Landing Page</title>
        <link rel="canonical" href="http://renitam.github.io/skilled-elearning-page" />
        <link rel="icon" type="image/x-icon" href={favicon} />
      </Helmet>
      <Nav>
        <Logo src={skilledlight} alt="skilled logo" />
        <Button>Get Started</Button>
      </Nav>
      <Header>
        <IntroText>
          <IntroHeading>Maximize skill, minimize budget</IntroHeading>
          <Body>
            Our modern courses across a range of in-demand skills will give you the 
            knowledge you need to live the life you want.
          </Body>
          <Button2>Get Started</Button2>
        </IntroText>
        <HeroImg />
      </Header>
      <Main>
        <CardLead>
          <CardLeadText>Check out our most popular courses!</CardLeadText>
        </CardLead>
        {/* {renderCards()} */}
        <Card>
          <CardLogo src={carddata[0].logo} alt={carddata[0].alt} />
          <CardText>
            <CardHeading>{carddata[0].heading}</CardHeading>
            <Body>{carddata[0].body}</Body>
            <CalltoAction>Get Started</CalltoAction>
          </CardText>
        </Card>
        <Card>
          <CardLogo src={carddata[1].logo} alt={carddata[1].alt} />
          <CardText>
            <CardHeading>{carddata[1].heading}</CardHeading>
            <Body>{carddata[1].body}</Body>
            <CalltoAction>Get Started</CalltoAction>
          </CardText>
        </Card>
        <Card>
          <CardLogo src={carddata[2].logo} alt={carddata[2].alt} />
          <CardText>
            <CardHeading>{carddata[2].heading}</CardHeading>
            <Body>{carddata[2].body}</Body>
            <CalltoAction>Get Started</CalltoAction>
          </CardText>
        </Card>
        <Card>
          <CardLogo src={carddata[3].logo} alt={carddata[3].alt} />
          <CardText>
            <CardHeading>{carddata[3].heading}</CardHeading>
            <Body>{carddata[3].body}</Body>
            <CalltoAction>Get Started</CalltoAction>
          </CardText>
        </Card>
        <Card>
          <CardLogo src={carddata[4].logo} alt={carddata[4].alt} />
          <CardText>
            <CardHeading>{carddata[4].heading}</CardHeading>
            <Body>{carddata[4].body}</Body>
            <CalltoAction>Get Started</CalltoAction>
          </CardText>
        </Card>
      </Main>
      <Footer>
        <Logo src={skilleddark} alt="skilled logo"/>
        <Button3>Get Started</Button3>
      </Footer>
    </>
  );
}

export default App;

