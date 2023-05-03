import { ComponentProps, ReactHTML, createElement } from 'react'
import { VariantProps as CVAVariantProps, cva } from 'class-variance-authority'
import {
  ClassProp,
  ClassValue,
  StringToBoolean,
} from 'class-variance-authority/dist/types'

interface Variants {
  [k: string]: {
    [k: string]: string
  }
}

type VariantsToValues<T extends Variants> = {
  [K in keyof T]: keyof T[K]
}

type ComponentPropsWithVariants<
  V extends Variants,
  E extends keyof ReactHTML,
> = {
  variants?: Partial<VariantsToValues<V>>
} & ComponentProps<E>

interface CVA<V extends Variants> {
  base?: string | string[]
  variants?: V
  defaultVariants?: Partial<VariantsToValues<V>>
}

export const CVAComponent = <E extends keyof ReactHTML, V extends Variants>(
  element: E,
  cvaObject: CVA<V>,
  displayName?: string,
) => {
  const {
    base = '',
    variants: requestVariants,
    defaultVariants = {},
  } = cvaObject

  const _variants = requestVariants ?? {}

  const createClassname = cva(base, { variants: _variants })

  const Component = ({
    children,
    className,
    variants,
    ...props
  }: ComponentPropsWithVariants<NonNullable<typeof requestVariants>, E>) => {
    const mergedVariants = { ...defaultVariants, ...variants }
    const cvaClassName = createClassname({ className, ...mergedVariants })

    console.log({ cvaClassName })

    return createElement(
      element,
      { className: cvaClassName, ...props },
      children,
    )
  }

  Component.displayName = displayName

  return Component
}

//
//
//

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
  }: { variants?: CVAVariantProps<typeof cvaClass> } & ComponentProps<E>) => {
    return createElement(
      element,
      { className: cvaClass(variants), ...props },
      children,
    )
  }

  CVAComponent.displayName = displayName || `${element}CVAComponent`

  return CVAComponent
}

//
//
//
