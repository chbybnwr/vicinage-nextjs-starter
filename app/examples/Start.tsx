import { color } from 'solarwindcss/color.stylex'

export function Start() {
  return (
    <section
      styleDeck={{
        gap: '18px',
      }}
    >
      <div>
        <h1
          styleDeck={{
            color: color.blue500,
          }}
        >
          Get started
        </h1>
        <p>
          Open <code>app/page.tsx</code>
        </p>
      </div>
    </section>
  )
}
