import { color } from 'solarwindcss/color.stylex'
import { fontSize } from 'solarwindcss/font-size.stylex'
import { apply } from 'vicinage'

export const Hello = function () {
  return (
    <div
      {...apply({
        color: color.green500,
        fontSize: fontSize.xl,
      })}
    >
      hello, world
    </div>
  )
}
