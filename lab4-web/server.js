const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name!message) {
        return res.status(400).json({ message: 'Всі поля обовʼязкові.' });
    }

    return res.status(200).json({
        message: Дякуємо, ${name}! Ваше повідомлення отримано.,
        data: { name, email, message }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});