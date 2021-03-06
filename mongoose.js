var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function callback(){
  var kittySchema = mongoose.Schema({
    name: String
  })
  // Note: methods must be added to the schema before compiling 
  // it with mongoose.model()
  // compile has to happen once and in the first place
  kittySchema.methods.speak = function(){
    var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name"
    console.log(greeting);
  }
  var Kitten = mongoose.model('Kitten',kittySchema)
  var fluffy = new Kitten({name: 'fluffy'});
  fluffy.speak() // "Meow name is fluffy"

  var silence = new Kitten({name: 'Silence'})
  console.log(silence.name)

  fluffy.save(function (err, fluffy){
    if (err) return console.error(err);
    fluffy.speak();
  });

  Kitten.find(function(err,kittens){
    if (err) return console.error(err);
    console.log(kittens)
    console.log("data saved and retrieved")
  })
})






// var db = mongoose.connection;
// console.log("so far so good")
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback () {
//   console.log("connection opened");
//   var kittySchema = mongoose.Schema({
//     name: String
//   })
//   var Kitten = mongoose.model('Kitten',kittySchema)
//   var silence = new Kitten({name: 'Silence'})
//   console.log("silence.name is : " + silence.name)
//   kittySchema.methods.speak = function(){
//   var greeting = this.name
//   ? "Meow name is  " + this.name
//   : "I don't have a name"
//   console.log(greeting);
// }
//   var fluffy = new Kitten({name: 'fluffy'});
//   fluffy.speak() // "Meow name is fluffy"
//   fluffy.save(function(err,fluffy){
//     if (err) return console.error(err);
//     fluffy.speak();
//   })
// });




















