import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://momoprotocol.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://momoprotocol.finance/farms'
  },
  {
    label: 'Staking',
    icon: 'PoolIcon',
    href: 'https://momoprotocol.finance/staking'
  },
  {
    label: 'IDO',
    icon: 'IfoIcon',
    href: 'https://momoprotocol.finance/ido',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.goosedefi.com/lottery'
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Project Info',
  //       href: 'https://treedefi.com/',
  //     },
  //     {
  //       label: 'Litepaper',
  //       href: 'http://litepaper.momodefi.com/',
  //     },
  //     {
  //       label: 'Donation Vault',
  //       href: 'https://momodefi.com/dov/',
  //     },
  //     {
  //       label: 'Marketing Vault',
  //       href: 'https://momodefi.com/mav/',
  //     },
  //   ],
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/MomoProtocol762/",
      },
      // {
      //   label: "Docs",
      //   href: 'https://docs.momodefi.com/',
      // },
      {
        label: "Blog",
        href: "https://medium.com/@momoprotocol",
      },
    ],
  },
]

export default config
