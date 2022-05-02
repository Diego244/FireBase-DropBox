var express = require('express');
var router = express.Router();
var formidable = require('formidable');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

 // Rota para acessar o upload

router.post('/upload', (req, res)=>{

  let form = new formidable.IncomingForm({
    uploadDir: './upload', 
    keepExtensions: true 
  });

  // Interpretação dos dados  

  form.parse(req, (err, fields, files)=>{

    res.json({
      files
    });

  });

});

module.exports = router;
