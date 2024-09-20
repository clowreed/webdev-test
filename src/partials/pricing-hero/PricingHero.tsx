import React from 'react'

// Components
import Container from '../../components/container/Container'
import Title from '../../components/title/Title'
import Subtitle from '../../components/subtitle/Subtitle'
import PricingCards from './PricingCards'

// Styles
import {
  Wrapper,
  StyledSectionNextHeader,
  StyledVectorOutline,
  StyledVectorFilled,
} from './PricingHero.styles'

const PricingHero = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <StyledSectionNextHeader align="center" maxWidth="70%">
            <Title as="h1" align="center">
              Simple, straightforward, pricing for every stage of business
            </Title>
            <Subtitle small>
              Join over 150,000 businesses who have built a website with B12
            </Subtitle>
          </StyledSectionNextHeader>
          <PricingCards />
          &nbsp;
        </Container>

        <StyledVectorOutline />
        <StyledVectorFilled />
      </Wrapper>
    </>
  )
}

export default PricingHero
