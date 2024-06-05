import styled from 'styled-components';

// Define design system //

export const colors = {
    periwinkle: '#666ca3',
    navy: '#13183f',
    grey: '#83869a',
    hotpink: '#f74780',
    pastelpink: '#ffa7c3',
    gradient1: 'linear-gradient(#f02aa6, #ff6f48)',
    gradient2: 'linear-gradient(#4851ff, #f02aa6)',
    gradient3: 'linear-gradient(#ffffff, #f0f1ff)',   
}; 

// Define Typography
export const HeadingXL = styled.h1`
    font-family: 'Plus Jakarta Sans Extra Bold', sans-serif;
    font-size: 56px;
    line-height: 70px;
`;

export const HeadingL = styled.h2`
    font-family: 'Plus Jakarta Sans Extra Bold', sans-serif;
    font-size: 40px;
    line-height; 51px;
`;

export const HeadingM = styled.h2`
    font-family: 'Plus Jakarta Sans Extra Bold', sans-serif;
    font-size: 32px;
    line-height: 40px;
`;

export const HeadingS = styled.h3`
    font-family: 'Plus Jakarta Sans Extra Bold', sans-serif;
    font-size: 24px;
    line-height: 28px;
`;

export const BodyM = styled.p`
    font-family: 'Plus Jakarta Sans Medium', sans-serif;
    font-size: 18px;
    line-height: 28px;
`;

export const BodyS = styled.p`
    font-family: 'Plus JakartaSans Bold';
    font-size: 16px;
    line-height: 28px;
`;

// Define sections
export const Header = styled.header`
    margin: 0;
    padding: 29px 165px;

    @media screen and (max-width: 768px) {
        padding: 16px;
    }
`;

export const Main = styled.main`
    margin: 0;
    padding: 165px;
    display: grid;
    grid-template-columns: repeat(3, 350px);
    grid-template-rows: 1fr 1fr;
    column-gap: 30px;
    row-gap: 80px;
    background: ${colors.gradient3};
    color: ${colors.navy};
`;

export const Footer = styled.footer`
    background: ${colors.navy};
    position: relative;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 29px 165px;

    @media screen and (max-width: 768px) {
        padding: 16px;
    }
`;

// Header section components
export const Navbar = styled.nav`
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const IntroText = styled.div`
    margin: 0;
    padding: 0;
    width: 457px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        width: 343px;
    }
`;

export const IntroHeading = styled(HeadingXL)`
    margin: 0;
    padding-top: 38px; 
    color: ${colors.navy};

    @media screen and (max-width: 768px) {
        font-size: 40px;
        line-height: 51px;
    }
`;

export const Body = styled(BodyM)`
    margin: 0;
    padding: 29px 0;
    color: ${colors.grey};

    @media screen and (max-width: 768px) {
        font-size: 16px;
        padding: 25px 0;
    }
`;

export const HeroImg = styled.div`
    background-image: url('../images/image-hero-desktop.png');
    object-fit: contain;
    position: absolute;
    top: -146px;
    right: -335px;
    @media screen and (max-width: 768px) {
        content: url('../images/image-hero-mobile.png');
    }
`;


// Card section components
export const Card = styled.div`
    margin: 0;
    padding: 0;
    width: 350px;
    height: auto;
    background-color: white;
    border-radius: 10px;
    position: relative;
`;

export const CardLogo = styled.img`
    position: relative;
    top: -24px;
    left: 32px;
    width: 56px;
    height: 56px;
`;

export const CardLead = styled(Card)`
    background: ${colors.gradient1};
    color: white;
    display: flex;
    margin: 

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 376px) {
    }
`;

export const CardLeadText = styled(HeadingM)`
    padding: 24px 28px 32px;
    margin: 0;

    @media screen and (max-width: 768px) {
        font-size: 24px;
        line-height: 32px;
        padding: 24px;
    }
`;

export const CardHeading = styled(HeadingS)`
    margin: 0;
    padding: 0;

    @media screen and (max-width: 768px) {
        padding: 0;
        font-size: 20px;
        line-height: 1;
        height: 35px;
    }
`;

export const CardText = styled.div`
    padding: 0 32px;
`;

export const CalltoAction = styled(BodyM)`
    color: ${colors.hotpink};
`;

export const Logo = styled.img`
    width: 114px;
    height: 45px;
    margin: 0;
    padding: 0;
    object-fit: contain;

    @media screen and (max-width: 768px) {
        width: 89px;
        height: 35px;
    }
`;


// Define buttons -- default navy / nav
export const Button = styled.button`
    font-family: 'Plus Jakarta Sans Bold', sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 700px;
    color: white;
    margin: 0;
    padding: 0;
    border: none;
    background: ${colors.navy};
    width: 167px;
    height: 56px;
    border-radius: 28px;

    // behind the button lies a #fff background that appears on hover
    &:after {
        position: absolute;
        background: white;
        opacity: 0;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 28px;
        transition: all 0.3s linear;
    }

    &:hover {
        opacity: 0.3;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        width: 140px;
        height: 48px;
    }
`;

// button style 1 - pink to orange gradient / header
export const Button2 = styled(Button)`
    background: ${colors.gradient1};

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

// button style 2 - blue to purple gradient / footer
export const Button3 = styled(Button)`
    background: ${colors.gradient2};
`;