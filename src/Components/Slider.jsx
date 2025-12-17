import React from 'react'

const Slider = () => {
  return (
    <div className='p-5 overflow-hidden w-full backdrop-blur-lg border border-fuchsia-500 border-l-0 border-r-0 shadow-[0_0_20px_rgba(255,0,255,0.5)]'>
        <div className="slide-left">
          <img src="https://cdn.simpleicons.org/html5" width="40" />
          <br />
          <img src="https://cdn.simpleicons.org/tailwindcss" width="40" />
          <br />
          <img src="https://cdn.simpleicons.org/javascript" width="40" />
          <br />
          <img src="https://cdn.simpleicons.org/react" width="40" />
          <br />
          <img src="https://cdn.simpleicons.org/laravel" width="40" />
          <br />
          <img src="https://cdn.simpleicons.org/mysql" width="40" />
          <br />
          <img src="https://cdn.simpleicons.org/postman" width="40" />
          <br />
          <img src="https://cdn.simpleicons.org/git" width="40" />
          <br />
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            width="40"
            className="rounded-3xl"
          />
        </div>
    </div>
  )
}

export default Slider