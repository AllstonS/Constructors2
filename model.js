  var Car= Backbone.Model.extend({
    urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/car',
    idAttribute: "_id",
    defaults: {
      photo: 'images/Lightning.jpeg'
},
    initialize: function (){
    console.log("Let's go race!");
  }
});

  var LightningMcQueen = new Car ({name: "Lightning McQueen", photo: 'images/Lightning.jpeg', career: 'racing', girlfriend: 'Sally'});
    console.log("Lightning McQueen");

  LightningMcQueen.save();

  var TowMater = new Car ({name:"Tow Mater", photo:'images/TowMater.jpeg', bestFriend:"Lightning McQueen"});
  var Sally = new Car({name: "Sally", photo: 'images/Sally.jpeg', color:'blue'});



  var Ogres = Backbone.Model.extend({
    urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/ogres',
    idAttribute: "_id",
    defaults:{
      "looks": "ugly",
      "mood": "cranky"
    },
    initialize: function () {
      console.log("That is one mean, smelly ogre!");
    }
  });

  var Shrek = new Ogres({name:"Shrek", color:"green", wife: "Fiona"});

  ogres1.save();
