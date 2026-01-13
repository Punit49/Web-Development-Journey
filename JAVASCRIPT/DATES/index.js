    let Mydate = new Date();
    // console.log(Mydate.toString());
    // console.log(Mydate.toISOString());
    // console.log(Mydate.toUTCString());
    // console.log(Mydate.toDateString());
    // console.log(Mydate.toTimeString());
    // console.log(Mydate.toLocaleDateString());
    // console.log(Mydate.toLocaleTimeString());
    // console.log(Mydate.getMilliseconds());

    // let NewDate = new Date(2024, 11, 16);
    // let NewDate = new Date(2024, 10, 16, 10, 40, 59);
    // let NewDate = new Date("2024-12-14");
    // let NewDate = new Date("9-17-2024");

    // console.log(NewDate.toLocaleString());

    // ? Timestamps 
    // let myTimeStamp = new Date();
    // console.log(myTimeStamp.getTime());
    
    // let Now = Date.now()/1000;
    // console.log(Now);
    
    // console.log(Now.toFixed(0));
    
// ? toLocaleString() - 
    const temp = Mydate.toLocaleString("default", {
        weekday: "long"
    });
    console.log(temp);
    
    