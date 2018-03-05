var Wait = function(miliseconds){
  var d = new Date();
  do{}while(new Date() - d <= miliseconds);
};

export Wait;
