import React from 'react'

function Layout({children}) {
  return (
    <div className='container m-auto'>
        {children}
    </div>
  )
}

export default Layout