// import React from 'react'

type Props = {
    text:string,
    class:string | undefined,
}

const Heading = (props: Props) => {
  return (
    <h1 className={props.class}>{props.text}</h1>
  )
}

export default Heading