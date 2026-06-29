import type { StyleDeck } from 'vicinage'
import type { PropsWithChildren } from 'react'

export function NextStep({
  styleDeck,
  children,
}: PropsWithChildren<{
  styleDeck?: StyleDeck
}>) {
  return (
    <div
      styleDeck={[
        {
          paddingBlock: '24px',
          paddingInline: {
            default: '20px',
            '@media (width >= 1024px)': '32px',
          },
          flexBasis: '0',
          flexGrow: '1',
          flexShrink: '1',
        },
        styleDeck,
      ]}
    >
      {children}
    </div>
  )
}
