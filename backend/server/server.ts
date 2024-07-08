const express = require('express');
const cors = require('cors')
const app = express();
const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');
const PORT = 5000

app.use(cors())
app.use(express.json())

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})


// example protected route
app.use('/api/protected', ClerkExpressRequireAuth(), (req, res) => {
  res.json({ message: "This is a protected route" });
})

const emailBlastRoutes = require('./routes/blasts');
const mailingListRoutes = require('./routes/lists');
const messageRoutes = require('./routes/messages');
const recipientRoutes = require('./routes/recipients')
const userRoutes = require('./routes/users');


app.use('/api/emails', emailBlastRoutes);
app.use('/api/mailing-lists', mailingListRoutes);
app.use('./api/messages', messageRoutes)
app.use('./api/recipients', recipientRoutes)
app.use('/api/users', userRoutes);