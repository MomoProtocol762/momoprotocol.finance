import React from 'react'
import styled from 'styled-components'
import { Text, Heading, BaseLayout, Button, LinkExternal, Flex, Image } from '@pancakeswap-libs/uikit'
import { ifosConfig } from 'config/constants'
import useI18n from 'hooks/useI18n'
import IfoCard from './components/IfoCard'
import Title from './components/Title'
import IfoCards from './components/IfoCards'

const LaunchIfoCallout = styled(BaseLayout)`
  border-top: 2px solid ${({ theme }) => theme.colors.textSubtle};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin: 0 auto;
  padding: 32px 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: 1fr 1fr;
  }
`

const List = styled.ul`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;

  & > li {
    line-height: 1.4;
    margin-bottom: 8px;
  }
`

/**
 * Note: currently there should be only 1 active IFO at a time
 */
const activeIfo = ifosConfig.find((ifo) => ifo.isActive)

const Ifo = () => {
  const TranslateString = useI18n()

  return (
    <div>
      {/* <IfoCards isSingle>
         <IfoCard ifo={activeIfo} />
      </IfoCards> */}
      <LaunchIfoCallout>
        <div>
          <Title as="h2">{TranslateString(592, 'How to take part')}</Title>
          <Heading mb="16px">{TranslateString(594, 'Before Sale')}:</Heading>
          <List>
            <li>{TranslateString(596, 'Buy MOMO and BNB tokens')}</li>
            <li>{TranslateString(598, 'Get MOMO-BNB LP tokens by adding MOMO and BNB liquidity')}</li>
          </List>
          <Flex mb="16px">
            <LinkExternal href="http://exchang.momoprotocol.finance/#/swap" mr="16px">
              {TranslateString(999, 'Buy BNB')}
            </LinkExternal>
            {/* <LinkExternal href="http://exchang.momoprotocol.finance/#/add/ETH/0xafb2997fe9a99022e61c7e01b974e0e3d7704b02">
              {TranslateString(999, 'Get LP tokens')}
            </LinkExternal> */}
          </Flex>
          <Heading mb="16px">{TranslateString(600, 'During Sale')}:</Heading>
          <List>
            <li>{TranslateString(602, 'While the sale is live, commit your MOMO-LP tokens to buy the IFO tokens')}</li>
            <li>{TranslateString(999, 'Confirm the transaction in your wallet')}</li>
            <li>{TranslateString(999, 'Min amount 0.1 BNB')}</li>
            <li>{TranslateString(999, 'Max Amount 10 BNB')}</li>
          </List>
          <Heading mb="16px">{TranslateString(604, 'After Sale')}:</Heading>
          <List>
            <li>{TranslateString(999, 'Tokens will distribute to your wallet after the sale')}</li>
            {/* <li>{TranslateString(606, 'Claim the tokens you bought, along with any unspent funds.')}</li>
            <li>{TranslateString(608, 'Done!')}</li> */}
          </List>
          {/* <Text as="div" pt="16px">
            <Button
              as="a"
              variant="secondary"
              href="https://docs.pancakeswap.finance/core-products/ifo-initial-farm-offering"
            >
              {TranslateString(610, 'Read more')}
            </Button>
          </Text> */}
        </div>
        <div>
          <Image src="/images/ifo-bunny.png" alt="ifo bunny" width={436} height={406} responsive />
          <div>
            <Title as="h2">{TranslateString(512, 'Want to launch your own IFO?')}</Title>
            <Text mb={3}>
              {TranslateString(
                514,
                'Launch your project with PancakeSwap, Binance Smart Chain’s most-used AMM project and liquidity provider, to bring your token directly to the most active and rapidly growing community on BSC.',
              )}
            </Text>
            <Button
              as="a"
              href="https://forms.gle/Mt4AMV3B4vWGPsiT7"
              external
            >
              {TranslateString(516, 'Apply to launch')}
            </Button>
          </div>
        </div>
      </LaunchIfoCallout>
    </div>
  )
}

export default Ifo
