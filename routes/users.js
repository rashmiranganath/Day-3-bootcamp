var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/find/:id', function (req, res, next) {
	const {id} = req.params
	console.log(id);
	res.status(200).json({ message:  "Book Found" });
});

// router.post('/add',function(req,res){
//   console.log(req.body)
// })

module.exports = router;
