import React from 'react'

import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import NavPopup, { NavPopupProps } from 'components/NavPopup'
import IconFlagChina from 'public/img/iconFlagChina.svg'
import IconFlagMexico from 'public/img/iconFlagMexico.svg'
import IconFlagUnitedKingdom from 'public/img/iconFlagUnitedKingdom.svg'

const renderFlag = (Icon: any) => () =>
  (
    <div className='icon'>
      <Icon></Icon>
    </div>
  )

const localeDetails = {
  en: {
    label: 'ENG',
    icon: renderFlag(IconFlagUnitedKingdom)
  },
  es: {
    label: 'SPA',
    icon: renderFlag(IconFlagMexico)
  },
  zh: {
    label: 'CHN',
    icon: renderFlag(IconFlagChina)
  }
}

type LocalePickerProps = Pick<NavPopupProps, 'isOpen' | 'setIsOpen'>

const LocalePicker = (props: LocalePickerProps) => {
  const router = useRouter()
  const { i18n } = useTranslation()

  const locale = localeDetails[i18n.language]
  const items = Object.entries(localeDetails)
    .filter(([key]) => key !== i18n.language)
    .map(([key, value]) => ({
      ...value,
      pathname: router.pathname,
      locale: key
    }))

  return (
    <div className='locale-picker'>
      <NavPopup
        {...props}
        {...locale}
        items={items}
        variant='secondary'
        xOffset={1}
        disableHover
      />
    </div>
  )
}

export default LocalePicker
