function getDateKey(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    console.log('day', dd)
    console.log('month', mm)
    console.log('day', yyyy)
    if(dd<10)
    {
        dd ='0'+dd;
    }

    if(mm<10)
    {
        mm ='0'+mm;
    }

    return yyyy + '-' + mm + '-' + dd;
  }
  

  console.log(getDateKey())