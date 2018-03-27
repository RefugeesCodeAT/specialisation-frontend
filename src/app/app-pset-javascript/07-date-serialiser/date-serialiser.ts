export const dateSerialiser = {
  serialise: function(anObject, type): string {
    if(type == "UTC")
    {
      anObject.birthday = anObject.birthday.getTime();
      anObject.deathday = anObject.deathday.getTime();

      let myJSON = JSON.stringify(anObject);
      return myJSON;
    }
    else if (type == "ISO")
    {
      //anObject.birthday = new Date(anObject.birthday);
      //let Newbirthday = anObject.birthday.getFullYear() + "-" + anObject.birthday.getMonth() + "-" + anObject.birthday.getDate(); 
      //anObject.deathday = anObject.deathday.getTime();
      
      anObject.birthday = new Date(anObject.birthday);
      let Newbirthday = anObject.birthday.getFullYear() + "-" + 
      "0" + (anObject.birthday.getMonth()+1) + "-" + anObject.birthday.getDate(); 
      

      anObject.deathday = new Date(anObject.deathday);
      let Newdeathday = anObject.deathday.getFullYear() + "-" + 
      "0" + (anObject.deathday.getMonth()+1) + "-" + anObject.deathday.getDate();
      
      anObject.birthday = Newbirthday;
      anObject.deathday = Newdeathday;
      
      let myJSON = JSON.stringify(anObject);
      return myJSON;
    }
    else 
    {
      throw "Error";
    }


  },
  deserialise: function(json): any {

    let myJSON = JSON.parse(json);
    // if the date integer that means , it is value of UTC. and if it is a string sequence , that means ISO
    //iso
    if(myJSON.birthday.getDate()!=0)
      myJSON.birthday = new Date(myJSON.birthday);

      //utc
    if(myJSON.deathday.getDate()!=0) 
      myJSON.deathday = new Date(myJSON.deathday);

      //let JSON1 = JSON.stringify(anObject);
      //myJSON    = JSON.parse(JSON1);

      return myJSON;
      

  }
};
