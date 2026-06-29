'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */

import { Start } from './examples/Start'
import { Hello } from './examples/Hello'
import { Pseudo } from './examples/Pseudo'
import { color } from 'solarwindcss/color.stylex'
import { spacing } from 'solarwindcss/spacing.stylex'
import { Logical } from './examples/Logical'
import { Dynamic } from './examples/Dynamic'
import { Responsive } from './examples/Responsive'
import { useState } from 'react'

const examples: Record<string, any> = {
  Start,
  Hello,
  Pseudo,
  Logical,
  Dynamic,
  Responsive,
}

export default function Home() {
  const [selectedExample, setSelectedExample] = useState('Start')
  const Example = examples[selectedExample]

  return (
    <>
      <div
        styleDeck={{
          gap: spacing[8],
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'center',
        }}
      >
        <Example />
      </div>
      <div
        styleDeck={{
          paddingBlock: spacing[2],
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        {Object.keys(examples).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedExample(key)}
            styleDeck={{
              textDecoration: selectedExample === key && 'underline',
              color: selectedExample === key && color.blue500,
            }}
          >
            {key}
          </button>
        ))}
      </div>
    </>
  )
}
