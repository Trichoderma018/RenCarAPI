const express = require('express');
const cors = require('cors');
const interestRoutes = require('./src/routes/loginRoutes');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', interestRoutes);

// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});