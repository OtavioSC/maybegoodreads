import app from './server'

// change to env variable
const PORT = 4001

app.listen(PORT, async () => {
    console.log('Server is running')
})