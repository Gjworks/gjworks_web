"use client"

import { useState, useEffect } from "react";

export default function description( props: any) {
  const [desc, setDesc] = useState<{[key: string]: any}>()

  useEffect(() => {
    props.desc && setDesc(desc)
  }, [])
  return (
    <>
      <div className="pb-8">
        <div dangerouslySetInnerHTML={{ __html: props.desc }} />
      </div>
    </>
  )
}