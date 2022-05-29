import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t(''),
    items: [
      {
        label: t(''),
        href: '',
        isHighlighted: true,
      },
      {
        label: t(''),
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
      {
        label: '',
      },
      {
        label: t(''),
        href: '',
      },
    ],
  },
  {
    label: t(''),
    items: [
      {
        label: t(''),
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
    ],
  },
  {
    label: t(''),
    items: [
      {
        label: '',
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
      {
        label: t(''),
        href: '',
      },
    ],
  },
]
