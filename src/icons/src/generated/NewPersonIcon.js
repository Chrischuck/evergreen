import React from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M9.12 12.69c-1.17-.53-1.01-.85-1.05-1.29-.01-.06-.01-.12-.01-.19.4-.37.73-.87.94-1.44 0 0 .01-.03.01-.04.05-.14.09-.27.12-.4.27-.06.43-.36.49-.63.06-.11.19-.39.16-.7-.04-.41-.2-.6-.38-.68v-.07c0-.51-.05-1.25-.14-1.74-.02-.13-.05-.27-.09-.4-.17-.6-.53-1.14-1.01-1.52C7.66 3.2 6.96 3 6.33 3c-.62 0-1.33.2-1.82.59-.49.38-.85.92-1.02 1.52-.04.13-.07.26-.09.4-.09.49-.13 1.23-.13 1.74v.06c-.19.08-.35.27-.39.68-.03.31.1.59.16.7.06.28.22.59.5.64.03.14.07.27.11.4 0 .01.01.02.01.02v.01c.22.59.55 1.1.96 1.46 0 .06-.01.12-.01.17-.04.44.08.76-1.09 1.29-1.17.53-2.93 1.1-3.29 1.95-.35.87-.2 1.37-.2 1.37h12.6s.15-.5-.22-1.36c-.36-.85-2.12-1.42-3.29-1.95zM14.89 2h-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1z'
]
const svgPaths20 = [
  'M11.41 15.92c-1.46-.65-1.26-1.05-1.31-1.59-.01-.07-.01-.15-.01-.23.5-.45.91-1.07 1.18-1.78 0 0 .01-.04.02-.05.06-.15.11-.32.15-.48.33-.07.53-.44.6-.78.08-.14.23-.48.2-.87-.05-.5-.24-.73-.47-.82v-.09c0-.63-.06-1.55-.17-2.15-.02-.17-.06-.33-.11-.5-.22-.73-.67-1.4-1.27-1.86C9.58 4.25 8.7 4 7.92 4c-.78 0-1.66.25-2.28.73-.61.47-1.06 1.13-1.27 1.86-.05.16-.08.33-.11.5-.12.6-.18 1.51-.18 2.14v.08c-.23.09-.43.32-.48.83-.04.39.12.73.2.87.08.35.28.72.62.78.04.17.09.33.15.48 0 .01.01.02.01.03l.01.01c.27.72.69 1.35 1.21 1.8 0 .07-.01.14-.01.21-.05.54.1.94-1.36 1.59-1.46.65-3.66 1.35-4.11 2.4C-.14 19.38.04 20 .04 20h15.75s.18-.62-.27-1.67c-.45-1.06-2.65-1.75-4.11-2.41zM18.87 3h-2V1c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V5h2c.55 0 1-.45 1-1s-.45-1-1-1z'
]

export default function NewPersonIcon({ ...props }) {
  return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...props} />
}
