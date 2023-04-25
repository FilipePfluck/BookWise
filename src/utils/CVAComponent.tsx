import { ComponentProps, ReactHTML, createElement } from 'react'
import { VariantProps } from 'class-variance-authority'
import {
  ClassProp,
  ClassValue,
  StringToBoolean,
} from 'class-variance-authority/dist/types'

type ConfigSchema = Record<string, Record<string, ClassValue>>

type ConfigVariants<T extends ConfigSchema> = {
  [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | null
}

type Props<T> = T extends ConfigSchema
  ? ConfigVariants<T> & ClassProp
  : ClassProp

export const createCVAComponent = <E extends keyof ReactHTML>(
  element: E,
  cvaClass: <T>(props?: Props<T> | undefined) => string,
  displayName?: string,
) => {
  const CVAComponent = ({
    children,
    variants,
    ...props
  }: { variants?: VariantProps<typeof cvaClass> } & ComponentProps<E>) => {
    return createElement(
      element,
      { className: cvaClass(variants), ...props },
      children,
    )
  }

  CVAComponent.displayName = displayName || `${element}CVAComponent`

  return CVAComponent
}
