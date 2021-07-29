import './setup'
import app, { init } from "./app";

const port = process.env.PORT;

init().then( () => {
    console.log('database connected')
    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    })
})

