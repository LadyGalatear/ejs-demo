import express from 'express';
const app = express();

// Set view engine
app.set('view engine', 'ejs');

const PORT = 3002;

app.get('/', (req, res) => {
    let user = {
        name: 'Gigi',
        color: 'mauve',
        food: 'pork fried rice',
        grade: 3.8,
        age: 44
    }

    res.render('home', { user });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});