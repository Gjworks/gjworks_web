'use client'

import React, { useEffect } from 'react'
import Prism from 'prismjs'

import 'prismjs/components/prism-typescript.min'
import 'prismjs/components/prism-jsx.min'
import 'prismjs/components/prism-tsx.min'
import 'prismjs/components/prism-java.min'
import 'prismjs/components/prism-bash.min'
import 'prismjs/components/prism-css.min'
import 'prismjs/components/prism-docker.min'
import 'prismjs/components/prism-git.min'
import 'prismjs/components/prism-graphql.min'
import 'prismjs/components/prism-javascript.min'
import 'prismjs/components/prism-json.min'
import 'prismjs/components/prism-markdown.min'
import 'prismjs/components/prism-markup.min'
import 'prismjs/components/prism-sql.min'
import 'prismjs/components/prism-swift.min'
import 'prismjs/components/prism-yaml.min'

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
