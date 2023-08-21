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
      <div className="Code bg-white dark:bg-dark-950 rounded-md overflow-hidden border border-gray-200 dark:border-dark-800 shadow-md shadow-gray-100 dark:shadow-dark-950">
        <div className="grid grid-cols-12 gap-6 border-b border-gray-200 dark:border-dark-800 bg-white dark:bg-dark-900">
          <div className="col-span-2 flex gap-2 items-center py-2.5 pl-4">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
          </div>
          <div className="col-span-8 ">
            <div className="flex items-center justify-center text-xs text-center text-gray-900 dark:text-white h-full">
              {props.title}
            </div>
          </div>
          <div className="col-span-2 text-xs">
            <div className="flex justify-end h-full ">
              <div className="h-full flex items-center justify-center text-[10px] border-l border-gray-200 bg-gray-100 dark:bg-dark-800 dark:border-dark-700 px-4 py-1 text-gray-400 hover:text-gray-600 cursor-pointer">
                Copy
              </div>
            </div>
          </div>
        </div>
        <pre>
          <code className={`language-${props.lang}`}>{props.value}</code>
        </pre>
      </div>
    </>
  )
}

export default Codehighlighter
