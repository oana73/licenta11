import React from 'react'
import parse from 'html-react-parser';

export default function BlogContent({content}) {
  return (
    <article className="">
        {parse(`${content}`)}
    </article>
  )
}
