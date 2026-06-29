import type { StyleDeck } from 'vicinage'

declare module 'react' {
  interface DOMAttributes {
    styleDeck?: StyleDeck
  }
}

export {}
