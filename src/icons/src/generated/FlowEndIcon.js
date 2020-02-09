import React from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M9.702 7.31c.176.176.293.41.293.684a.976.976 0 0 1-.283.695c-1.888 1.91-2.892 2.918-3.011 3.027-.179.164-.42.284-.693.284a.995.995 0 0 1-.997-.985c0-.274.112-.541.292-.72.12-.12.624-.551 1.514-1.293H.98c-.536 0-.975-.47-.975-1.008 0-.537.439-.996.975-.996h5.837c-.895-.752-1.4-1.187-1.514-1.304a1.03 1.03 0 0 1-.292-.705C5.01 4.45 5.464 4 6 4c.272 0 .52.108.695.294A535.7 535.7 0 0 0 9.702 7.31zM13 11.002c-1.657 0-3-1.347-3-3.008a3.004 3.004 0 0 1 3-3.007c1.657 0 3 1.346 3 3.007a3.004 3.004 0 0 1-3 3.008z'
]
const svgPaths20 = [
  'M12 9.919a3.998 3.998 0 0 1 4-3.92c2.21 0 4 1.79 4 3.997a3.998 3.998 0 0 1-4 3.996 3.998 3.998 0 0 1-4-3.916.967.967 0 0 1-.28.612L7.685 14.71a.958.958 0 0 1-.686.285c-.536 0-.994-.461-.994-.997 0-.273.107-.528.283-.704l2.379-2.302H.98c-.537 0-.976-.46-.976-.996s.44-.992.976-.992h7.676L6.287 6.687a.957.957 0 0 1-.283-.686c0-.536.458-.996.994-.996.274 0 .51.1.686.285l4.027 4.024c.159.158.27.365.29.605z'
]

export default function FlowEndIcon({ ...props }) {
  return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} {...props} />
}
