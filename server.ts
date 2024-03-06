const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/task', taskRoutes);

mongoose.connect(config.db, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true })
    .then(() => {
        app.listen(3000);
        console.log('Server started on port 3000');
    })
    .catch(err => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
