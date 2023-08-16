import React, { useState, useEffect } from 'react'
import Prism from 'prismjs'

import 'prismjs/components/prism-typescript.min'
import 'prismjs/components/prism-jsx.min'
import 'prismjs/components/prism-tsx.min'

const Codehighlighter = props => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <>
      <pre>
        <code className={`language-${props.lang}`}>{props.value}</code>
      </pre>
    </>
  )
}

export default Codehighlighter
