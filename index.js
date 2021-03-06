const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose.connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });


//iteration 2
Recipe.create({
  title: 'Marcos recipe',
        level: 'Amateur Chef',
        ingredients: ['penne', 'sauce','cheese'],
        cuisine: 'Italian',
        dishType: 'Dish',
        image: 'https://images.media-allrecipes.com/userphotos/720x405/815964.jpg',
        duration: 20,
        creator: 'Italian Ironman'
}).then(recipeFromDB =>{console.log(recipeFromDB.title)}).catch(err => {console.log(err)})

//iteration 3
for (i=0; i<data.length; i++){
Recipe.create(data[i]).then(recipeFromDB =>{console.log(recipeFromDB.title)}).catch(err => {console.log(err)});
}

//iteration 4
Recipe.findOne({title: 'Rigatoni alla Genovese'})
.then(Recipe.update({duration : 100}))
.then(recipeFromDB => {console.log(`The duration of "${recipeFromDB.title}" has been updated successfully to "${recipeFromDB.duration}"`)})
.catch(err => {console.log(`some suspect behavior found: ${err}`)})


//iteration 5
Recipe.findOneAndDelete({title: 'Carrot Cake'})
.then(recipeFromDB => {console.log(`The recipe "${recipeFromDB.title}" has been deleted`)})
.catch(err => {console.log('Carrot Cake recipe not found')})

//iteration 6
mongoose.connection.close();