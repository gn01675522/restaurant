const express = require('express');
const exphbs = require('express-handlebars');
const restaurantList = require('./restaurant.json');
const app = express();
const port = 3000;

app.use(express.static('public'));

//template engine setting
app.engine('handlebars', exphbs.engine({ defaultLatout: 'main' }));
app.set('view engine', 'handlebars');

//設定 index 路由
app.get('/', (req, res) => {
	res.render('index', { restaurants: restaurantList.results });
});

app.get('/search', (req, res) => {
	const restaurant = restaurantList.results.filter((restaurant) => {
		const conditions =
			restaurant.name.toLowerCase().trim().includes(req.query.keyword.toLowerCase().trim()) ||
			restaurant.category.toLowerCase().trim().includes(req.query.keyword.toLowerCase().trim()) ||
			restaurant.name_en.toLowerCase().trim().includes(req.query.keyword.toLowerCase().trim()) ||
			restaurant.location.toLowerCase().trim().includes(req.query.keyword.toLowerCase().trim());
		return conditions;
	});
	res.render('index', { restaurants: restaurant, keyword: req.query.keyword });
});

app.get('/restaurants/:restaurants_id', (req, res) => {
	const restaurantIntro = restaurantList.results.find(function(restaurant) {
		return restaurant.id.toString() === req.params.restaurants_id;
	});
	res.render('show', { showRestaurants: restaurantIntro });
});

//start and listen on server
app.listen(port, () => {
	console.log(`Server is listening on port:${port}`);
});
