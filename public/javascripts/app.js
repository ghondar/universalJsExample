import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import router from './routes/router'

router.run((Handler) => {
  React.render(
    <Handler />,
    document.getElementById('container')
  )
})