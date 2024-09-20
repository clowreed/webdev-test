import styled from '@emotion/styled'
import React from 'react'
import { theme, mq } from '@styles/theme'
import { useTranslation } from 'react-i18next'

// Components
import SectionNext from '@components/section-next/SectionNext'
import SectionNextHeader from '@components/section-next/SectionNextHeader'
import Title from '@components/title/Title'
import List from '@components/list/List'
import TextIcon from '@components/text-icon/TextIcon'

// Partials
import HomeHero from '@partials/home-hero/HomeHero'
import FeaturedIn from '@partials/featured-in/FeaturedIn'
import SectionCta from '@partials/section-cta/SectionCta'
import PricingHero from '@partials/pricing-hero/PricingHero'

// Data
import { engageItems } from './data'

// Styles

const FeaturedInStyled = styled(FeaturedIn)`
  padding-block: 0;
  margin-top: 30px;

  ${mq['sm']} {
    padding-block: 0;
  }

  ${mq['md']} {
    margin-top: -110px;
  }
`

const IndexControl = ({ lang }) => {
  const { t } = useTranslation(['index'], { lng: lang })

  return (
    <>
      <HomeHero />
      <FeaturedInStyled />
      <SectionNext
        containerType="shaped"
        paddingTop="80px"
        container={{
          bg: theme.colors.brand.accentLightest,
          split: 'half',
          verticalAlign: 'center',
        }}
      >
        <List>
          {engageItems.map((item, idx) => (
            <TextIcon
              key={`list-item-${idx}`}
              icon={item.icon}
              iconLight={true}
              title={t(item.title, { ns: 'index' })}
              text={t(item.subtitle, { ns: 'index' })}
              iconMotion={{
                initial: {
                  opacity: 0,
                  scale: 0,
                },
                transition: { delay: 0.5 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true },
              }}
            />
          ))}
        </List>
        <SectionNextHeader bottomMargin="none">
          <Title textStyle="h3">{t('From new client intake to invoicing.', { ns: 'index' })}</Title>
          <p>
            {t(
              'With B12, you get a powerful website backed by tools to help you look professional, engage with clients, and streamline business operations.',
              { ns: 'index' }
            )}
          </p>
        </SectionNextHeader>
      </SectionNext>
      <PricingHero />
      <SectionCta
        title={t('The best AI website builder for businesses')}
        text={t(
          'Draft your business-ready website in only 60 seconds, with all the features you need to better attract, win, and serve your clients online.'
        )}
        ctaText={t('Start for free')}
      />
    </>
  )
}

export default IndexControl
