import Authentication from '../controllers/authentication';
import User from '../controllers/user';
import City from '../controllers/city';
import Weather from '../controllers/weather';

const router = require('express').Router();

router.get('/', (req, res)=>{
    res.send('connected');
});

router.get('/userProfile', (req, res)=>{
    res.send(req.user);
});

router.post('/userProfile', Authentication.updateProfile);

router.get('/user/addcity', User.addCity);
router.get('/user/removecity', User.removeCity);
router.get('/user/getcities', User.getPreferredCities);
router.get('/city/search', City.search);

router.get('/weather/getstatus', Weather.getById);

export default router;