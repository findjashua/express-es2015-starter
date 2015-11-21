import bodyParser from 'body-parser'

export default config => {
    const { app, router } = config
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(router)
    app.set('port', process.env.PORT || 5000)
}
