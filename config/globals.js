// public application level variables
module.exports = {
  //'db': 'mongodb://localhost:27017/cartracker'
    'db': 'mongodb://carsdba:Pankasbmw@ds157818.mlab.com:57818/cartracker',
    'google': {
        googleClientId: '448469484444-cbvm9au493sch12hu6l8otftdtmujl76.apps.googleusercontent.com',
        googleClientSecret: 'LzdJTRtImz3F54kNV-wrfZyK',
        //googleCallbackUrl: 'http://localhost:3000/google/callback'
        googleCallbackUrl: 'https://comp2106-cartracker.herokuapp.com/google/callback'
    }
};