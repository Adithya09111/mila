require('dotenv').config();
const express = require('express');

const mongoose = require('mongoose');
const helloRoutes = require('./routes/hello');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use('/api/hello', helloRoutes);
app.use('/api', authRoutes);

app.get('/', (req, res) => {
  res.send('Milatronics Backend API');
});


mongoose.connect(process.env.MONGO_URI, {
  // useNewUrlParser and useUnifiedTopology are not needed in Mongoose 6+
})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });
