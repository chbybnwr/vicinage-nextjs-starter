import { color } from 'solarwindcss/color.stylex'

export function Hello() {
  return (
    <div
      className="foo"
      styleDeck={{
        color: color.green500,
      }}
    >
      hello, world
    </div>
  )
}
