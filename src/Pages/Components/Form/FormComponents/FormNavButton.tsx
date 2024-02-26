import React, { MouseEventHandler } from 'react'

export default function NextButton(props: {styling: string, label: string, navFunction: MouseEventHandler}) {
  return (
    <div onClick={props.navFunction} className={'absolute text-2xl b-12 ' + props.styling}>
      {props.label}
    </div>
  )
}
