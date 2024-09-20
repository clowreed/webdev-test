import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { mq } from '@styles/theme'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 38px;
  padding-bottom: 40px;

  .hero-image-desktop {
    display: none;
  }

  ${mq['sm']} {
    .hero-image-mobile {
      display: none;
    }

    .hero-image-desktop {
      display: block;
    }
  }

  ${mq['md']} {
    padding-top: 60px;
    margin-bottom: 40px;
  }
`

export const ImageLaptopWrapper = styled(motion.div)`
  width: 100%;
  text-align: center;
`

export const ImagePhoneWrapper = styled(motion.div)`
  position: absolute;
  bottom: 0;
  right: -15%;
  width: 43%;
  text-align: center;

  ${mq['md']} {
    width: 40%;
    right: 430px;
    bottom: -20px;
  }
`
