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
        hobbies: ['video games', 'writing', 'tabletop gaming', 'drawing', 'world-building'],
        favorite_pokemon: ['Hisuian Zoroark', 'Pheromosa', 'Snorlax', 'Rotom', 'Tyranitar', 'Chandelure', 
            'Galvantula', 'Greninja'
        ]
    }

    res.render('home', { user });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});