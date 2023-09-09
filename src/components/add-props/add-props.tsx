import React from 'react'

import {mergeRefs} from '~/utils'

/**
 * `AddProps` clones the element passed into its `to` prop, appending
 * all additional props that were passed to this component, including
 * concatenating the class name passed to this component with any classes
 * already specified on the icon.
 *
 * This is useful for example for  any element which is supposed to be a material
 * icon with a specified tag name and an additional class added.  By creating a
 * component for that element that just returns the `AddProps` with a
 * `className` (an possibly `tag`) passed to it, you will have created a
 * component that will render a single DOM element with your specified tag
 * and class, that can accept an <Icon /> instance to its icon prop, our
 * desired API when dealing with icons.
 */
export const AddProps = React.forwardRef(function AddProps(
  props: AddPropsProps,
  ref: React.Ref<any>,
) {
  const {to, className, style, ...rest} = props

  // Remove all rest props that are passed as undefined
  // Use null if your intent is to override a previously passed value.
  Object.keys(rest).forEach((extraPropName) => {
    const extraPropValue = rest[extraPropName]
    if (extraPropValue === undefined) {
      delete rest[extraPropName]
    }
  })

  if (!React.isValidElement(to)) return to

  const {children, className: toClassName, style: toStyle, ...toRest} = to.props
  const hasStyle = !!(style || toStyle)

  const childProps: any = {
    ...toRest,
    ...rest,
    className: className + ' ' + toClassName,
    style: hasStyle
      ? {
          ...(toStyle || {}),
          ...(style || {}),
        }
      : undefined,
  }

  // React.cloneElement() preserves the ref by default, so we
  // should only override that ref if one has actually been
  // passed
  if (ref) {
    if ((to as any).ref) {
      childProps.ref = mergeRefs((to as any).ref, ref)
    } else {
      childProps.ref = ref
    }
  }

  return React.cloneElement(to, childProps, children)
})

export type AddPropsProps = {
  to: React.ReactElement<React.HtmlHTMLAttributes<Element>>
  className?: string
  [anyProp: string]: any
}
