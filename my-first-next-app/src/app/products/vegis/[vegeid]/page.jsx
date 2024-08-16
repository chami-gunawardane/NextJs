import React from 'react'
import Link from 'next/link'

function page({params}) {
  return (
    <>
    <div>Vege items {params.vegeid}</div>
    <Link href='/products/vegis'>Back to Vegis</Link>
    </>
  )
}

export default page