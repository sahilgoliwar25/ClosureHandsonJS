//Q1.
function alertCounter() {
  function counter() {
    var counter = 0;

    function IncreaseCounter() {
      return (counter += 1);
    }

    return IncreaseCounter;
  }

  var counter = counter();
  alert(counter());
  alert(counter());
  alert(counter());
  alert(counter());
}

//Q2.
function logCount() {
  let count = 0;
  (function () {
    if (count === 0) {
      let count = 1;
      console.log(count); // What is logged?
    }
    console.log(count); // What is logged?
  })();
}

//Q3.
function question3() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }
}

//Q4.
function question4() {
  function areaRectangle(length) {
    function inner(breadth) {
      return length * breadth;
    }
    return inner;
  }
  const area = areaRectangle(10);
  const output = area(20);
  console.log(output);
}

//Q5.
function question5() {
  function Counter() {
    var counter = 0;

    function IncreaseCounter() {
      return (counter += 1);
    }

    return IncreaseCounter;
  }

  var counter = Counter();
  alert(counter()); // 1
  alert(counter()); // 2
  alert(counter()); // 3
  alert(counter()); // 4
  alert(counter()); // 5
}

//Q6.
function question6() {
  var a = 12;
  (function () {
    alert(a);
  })();
}

//Q7.
function question7() {
  var a = 10;
  var x = (function () {
    var a = 12;
    return function () {
      alert(a);
    };
  })();
  x();
}

//Q8.
function question8() {
  var globalVar = "xyz";

  (function outerFunc(outerArg) {
    var outerVar = "a";

    (function innerFunc(innerArg) {
      var innerVar = "b";

      console.log(
        "outerArg = " +
          outerArg +
          "\n" +
          "innerArg = " +
          innerArg +
          "\n" +
          "outerVar = " +
          outerVar +
          "\n" +
          "innerVar = " +
          innerVar +
          "\n" +
          "globalVar = " +
          globalVar
      );
    })(456);
  })(123);
}
