import React from 'react'
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
  return (
    <div>
    <div>Error Page</div>
    <div>{err.error.message}</div>
    </div>
  )
}

export default Error