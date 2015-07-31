import Client from 'react-engine/lib/client'
import routes from './routes/routes'

const options = { routes }

document.addEventListener('DOMContentLoaded', function onLoad() {
    Client.boot(options);
})