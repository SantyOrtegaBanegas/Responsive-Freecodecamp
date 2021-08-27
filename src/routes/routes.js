const express = require('express');
const app = express();
const router = express.Router();


//Ruta inicial 

router.get( '/', (req, res ) => {    

  res.render('tributo.html');
    
});



//Contacto

router.get( '/contacto', (req, res ) => {    

    res.render('contact.html');
      
  });
  




//Login

router.get( '/', (req, res ) => {    

    res.render('tributo');
      
  });
  



//Acerca
router.get( '/', (req, res ) => {    

    res.render('contact');
      
  });




module.exports = router;