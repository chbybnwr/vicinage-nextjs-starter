import { apply } from 'vicinage'
import { color } from 'solarwindcss/color.stylex'
import { font } from 'solarwindcss'

export default function Home() {
  return (
    <div
      {...apply({
        alignItems: 'center',
        backgroundColor: 'light-dark(white, black)',
        colorScheme: 'light dark',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
      })}
    >
      <div
        {...apply(
          font.mono,
          {
            color: color.green500,
          },
          //
        )}
      >
        hello, world
      </div>
    </div>
  )
}
