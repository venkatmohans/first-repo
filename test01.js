console.log("Venkat Mohan");
function blockScopeExample() {
    if (true) {
      var c = 30;
      let d = 40;
      const e = 50;
      console.log(c); // 30
      console.log(d); // 40
      console.log(e); // 50
    }
    console.log("Printing var c");
    console.log(c); // 30 (var is function-scoped)
    try {
        console.log("Printing var d");
        console.log(d); // ReferenceError: d is not defined
    } catch (e) {
      console.log(e);
    }
    try {
        console.log("Printing var e");
        console.log(e); // ReferenceError: e is not defined
    } catch (e) {
      console.log(e);
    }
}
  
blockScopeExample();