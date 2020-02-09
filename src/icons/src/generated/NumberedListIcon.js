import React from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M2.76 7h1.26V0h-.94c-.04.21-.12.39-.25.54-.13.15-.29.27-.48.36-.18.09-.39.16-.62.2-.23.04-.46.06-.71.06v.9h1.74V7zm-.59 7.17c.18-.12.37-.25.58-.37a10.763 10.763 0 0 0 1.24-.83c.2-.16.37-.33.52-.51.15-.19.28-.39.37-.61.09-.22.14-.47.14-.74 0-.22-.04-.45-.12-.7-.08-.26-.21-.49-.4-.69-.18-.21-.43-.39-.72-.52-.3-.14-.68-.21-1.12-.21-.41 0-.77.07-1.08.2-.32.14-.58.32-.8.56-.22.23-.38.51-.49.84-.11.32-.16.67-.16 1.05h1.19c.01-.24.03-.47.08-.67.05-.21.11-.39.21-.54.09-.15.22-.27.38-.36.16-.09.35-.13.59-.13.26 0 .47.04.63.12.16.08.29.18.38.3.09.12.15.25.18.39s.05.27.05.4c-.01.27-.08.5-.22.71-.14.21-.32.4-.53.57-.22.18-.45.34-.71.49-.26.15-.51.31-.74.47-.5.31-.89.68-1.17 1.11-.3.41-.44.91-.45 1.48h5v-1H1.43c.05-.15.14-.29.27-.43.14-.13.29-.26.47-.38zM15.01 1.99h-7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-1c0-.55-.44-1-1-1zm0 9h-7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-1c0-.55-.44-1-1-1z'
]
const svgPaths20 = [
  'M1.74 9.01h1.27V1h-.95c-.04.24-.12.45-.26.62-.13.17-.29.3-.47.41-.19.11-.4.18-.63.23-.23.04-.46.07-.71.07v1.03h1.75v5.65zm.43 7.93c.18-.14.37-.28.58-.43.21-.14.42-.29.63-.45.21-.16.41-.33.61-.5.2-.18.37-.38.52-.59.15-.21.28-.45.37-.7.09-.25.14-.54.14-.85 0-.25-.04-.52-.12-.8-.08-.28-.21-.54-.39-.78-.19-.24-.43-.44-.73-.59-.3-.17-.68-.25-1.12-.25-.41 0-.77.08-1.08.23-.32.16-.58.37-.8.64-.22.27-.38.59-.49.96-.11.37-.16.77-.16 1.21h1.19c.01-.28.03-.53.08-.77s.12-.45.21-.62c.09-.18.22-.31.38-.42.16-.1.35-.15.59-.15.26 0 .47.05.63.14.16.09.29.21.38.35.09.14.15.29.18.45.03.16.05.31.05.45-.01.31-.08.58-.22.81-.14.24-.32.45-.53.66-.22.2-.45.39-.71.57-.26.18-.51.36-.74.54-.5.36-.89.78-1.17 1.27-.3.47-.45 1.04-.46 1.69H5v-1.14H1.43c.05-.17.14-.33.27-.49.13-.15.29-.3.47-.44zM18 4.02H8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-.56-.45-1-1-1zm0 9H8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-.56-.45-1-1-1z'
]

export default function NumberedListIcon({ ...props }) {
  return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...props} />
}
