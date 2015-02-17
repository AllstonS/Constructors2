  var Cars = Backbone.Collection.extend({
    url: 'http://tiy-fee-rest.herokuapp.com/collections/car',
    //define what our model is
    model: Car
});

  // var myCars = new Cars ();
  // myCar.add(LightningMcQueen);
  // myCar.add(TowMater);
  // console.log(myCars);
  //
  // myCars.add(Sally);
  // console.log(myCars);
  //
  // myCars.add(Doc);
  // console.log(myCars);
  //
  // TowMater.save()
  //
  //
  // Doc.destroy();
