
const { PrismaClient } = require('@prisma/client')
const express = require('express')
const prisma = new PrismaClient()

const app = express()
const port = 3001

app.get('/', async (req, res) => {
    const allUsers = await prisma.tenants.findMany(
        {
            include: {
                users: true,
            },
        })
    console.log(allUsers)
    res.send(allUsers)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})