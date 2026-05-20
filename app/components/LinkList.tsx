import { apply } from 'vicinage'
import type { PropsWithChildren } from 'react'

export function LinkList({ children }: PropsWithChildren) {
  return (
    <ul
      {...apply({
        padding: 0,
        listStyle: 'none',
        columnGap: '8px',
        display: 'flex',
        flexWrap: {
          default: 'wrap',
          '@media (width >= 1024px)': 'initial',
        },
        justifyContent: {
          default: 'center',
          '@media (width >= 1024px)': 'initial',
        },
        rowGap: '8px',
        marginTop: {
          default: '20px',
          '@media (width >= 1024px)': '32px',
        },
      })}
    >
      {children}
    </ul>
  )
}
