import express from 'express'

import config from './config'
import router from './routes'

const app = express()

config({
    app,
    router
})

app.listen(app.get('port'), () => {
    console.log(`server running on port ${app.get('port')}`)
})
