import React from 'react'

function page({params}) {
  console.log(params)

  return (
    <>
    <div>Catch All Routes</div>
    <ul>
      {params.dpath.map((item) => {
        return (
          <li>{item}</li>
        )
      })}
    </ul>
    </>
  )
}

export default page