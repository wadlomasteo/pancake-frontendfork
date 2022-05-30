import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'VivaSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('VivaSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('VivaSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('VivaSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('VivaSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('VivaSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('VivaSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('VivaSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('VivaSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('VivaSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('VivaSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('VivaSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('VivaSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('VivaSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('VivaSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('VivaSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('VivaSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('VivaSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('VivaSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('VivaSwap Info & Analytics')}`,
        description: 'View statistics for VivaSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('VivaSwap Info & Analytics')}`,
        description: 'View statistics for VivaSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('VivaSwap Info & Analytics')}`,
        description: 'View statistics for VivaSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('VivaSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('VivaSwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('VivaSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('VivaSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Viva Squad')} | ${t('VivaSwap')}`,
      }
    default:
      return null
  }
}
