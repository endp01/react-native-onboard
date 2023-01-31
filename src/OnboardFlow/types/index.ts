import { StyleProp, TextStyle, ViewStyle } from 'react-native'
import { FC, ReactElement } from 'react'
import { FormElementTypesConfig, OnboardPageTypesConfig, PageType } from '../index'
import { FooterProps } from '../Footer'
import { PrimaryButtonProps } from '../components/PrimaryButton'
import { SecondaryButtonProps } from '../components/SecondaryButton'

export interface PaginationProps {
  currentPage: number
  totalPages: number
  paginationSelectedColor?: string
  paginationColor?: string
  style?: StyleProp<ViewStyle> | any
}

export interface PageData {
  imageComponent?: ReactElement
  imageUri?: string
  id?: string
  primaryButtonTitle?: string
  secondaryButtonTitle?: string
  showFooter?: boolean
  showHeader?: boolean
  subtitle?: string
  title?: string
  type?: PageType
  style?: StyleProp<ViewStyle> | any
  props?: any
  subtitleStyle?: StyleProp<TextStyle> | undefined
  textStyle?: StyleProp<TextStyle> | undefined
  titleStyle?: StyleProp<TextStyle> | undefined
}

export interface TextStyles {
  subtitleStyle?: StyleProp<TextStyle> | undefined
  textAlign?: 'left' | 'center' | 'right'
  textStyle?: StyleProp<TextStyle> | undefined
  titleStyle?: StyleProp<TextStyle> | undefined
}

export interface OnboardFlowProps {
  autoPlay?: boolean
  backgroundImageUri?: string
  dismissButtonStyle?: StyleProp<ViewStyle> | undefined
  /**
   * @deprecated Use `type='fullscreen'` instead
   */
  fullscreenModal?: boolean
  onBack?: () => void
  onDone?: () => void
  onNext?: () => void
  onSaveData?: (data: StepResponseData, pageId: string) => void
  canContinue?: boolean
  setCanContinue?: (value: boolean) => void
  pageStyle?: StyleProp<ViewStyle> | undefined
  pageTypes?: OnboardPageTypesConfig
  formElementTypes?: FormElementTypesConfig
  pages?: PageData[]
  paginationColor?: string
  paginationSelectedColor?: string
  showDismissButton?: boolean
  enableScroll?: boolean
  style?: StyleProp<ViewStyle> | undefined
  type?: 'inline' | 'fullscreen' | 'bottom-sheet'
  customVariables?: object
  HeaderComponent?: FC<FooterProps>
  FooterComponent?: FC<FooterProps>
  PaginationComponent?: FC<PaginationProps>
  PrimaryButtonComponent?: FC<PrimaryButtonProps>
  SecondaryButtonComponent?: FC<SecondaryButtonProps>
  primaryColor?: string
  secondaryColor?: string
}

export interface StepResponseData {
  data: any
  source: PageData
}
