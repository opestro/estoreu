
const { PrismaClient } = require('@prisma/client')
const express = require('express')
var cors = require('cors')
const prisma = new PrismaClient()

const app = express()
const port = 3001
app.use(cors())

app.get('/', async (req, res) => {

    const name = req.query
    console.log(name)
    const allUsers = await prisma.tenants.findMany(
        {
            where: { name: name.tenant },
            include: {
                users: true,
                products: true,
            },
        })
    console.log(allUsers)
    res.send(allUsers)
})

app.post('/product', async (req, res) => {

    const name = req
    console.log(name)
    /* const allUsers = await prisma.products.create({
         data: { }) */
    console.log()
    res.send()
})
app.get('/productAdd', async (req, res) => {

    const name = req
    console.log(name)
    /* const allUsers = await prisma.products.create({
         data: { }) */
    console.log()
    res.send()
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})