import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data = useLoaderData()
  // const [data, setdata] = React.useState([])

  // useEffect(() => {
  //   fetch('https://api.github.com/users/adarshrajan11')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setdata(data)
  //       console.log('data', data)
  //     })
  // }, [])
  console.log('data', data)
  return (
    <div className='flex flex-col items-center justify-center p-8 bg-gray-800 text-white'>
      <img
        src={data.avatar_url}
        alt={`Avatar of ${data.login}`}
        className=' rounded-full w-32 h-32 mb-4 hover:rounded-lg md:mb-6'
      />
      <h2 className='text-2xl font-bold mb-2'>{data.login}</h2>
      <p className='text-gray-400 text-sm mb-4'>Followers: {data.followers}</p>
      <p className='text-gray-400 text-sm mb-4'>
        Created on: {new Date(data.created_at).toLocaleDateString()}
      </p>
      <a
        href={data.html_url}
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-500 hover:underline'
      >
        Visit GitHub Profile
      </a>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/adarshrajan11')
  console.log('response', response)
  return response.json()
}
