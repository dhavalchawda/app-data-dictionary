import React from "react"
import { Link, LinkProps } from "looker-lens"
import { ExtensionContext } from "./ExtensionWrapper"
import { Link as InternalLink } from "react-router-dom"

export { InternalLink }

export const ExternalLink: React.FC<LinkProps> = props => {
  return (
    <ExtensionContext.Consumer>
      {context => {
        return (
          <Link
            onClick={(...args) => {
              if (props.href) {
                context.extensionSDK.updateLocation(props.href)
              }
              if (props.onClick) {
                props.onClick(...args)
              }
            }}
            {...props}
          />
        )
      }}
    </ExtensionContext.Consumer>
  )
}
