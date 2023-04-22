import { VariantProps } from 'class-variance-authority'
import { ClassProp } from 'class-variance-authority/dist/types'
import { ComponentProps, ReactHTML, createElement } from 'react'

type CVAClass = ClassProp & {}

export const createCVAComponent = (
  element: keyof ReactHTML,
  cvaClass: (props?: ClassProp | undefined) => string,
  displayName?: string,
) => {
  const CVAComponent = ({
    children,
    ...props
  }: VariantProps<typeof cvaClass> & ComponentProps<element>) => {
    return createElement(element, { className: cvaClass({}) }, children)
  }

  CVAComponent.displayName = displayName || `${element}CVAComponent`

  return CVAComponent
}
