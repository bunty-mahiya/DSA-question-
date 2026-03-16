// 01 draw star patten  n =row  n=col
function starPatten(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}
starPatten(4);

// 02 draw patten

function secondPatten(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}
secondPatten(4);

//03 draw patten
function thirdPatten(n) {
  for (let i = 0; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + j;
    }
    console.log(row);
  }
}

thirdPatten(4);

// 04 four Patten

function fourPatten(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row = row + i;
    }
    console.log(row);
  }
}
fourPatten(4);

// fifth patten

function fifthPatten(n) {
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row = row + "*";
      // row = row + (j + 1);
    }
    console.log(row);
  }
}
fifthPatten(5);

// question six
function sixPatten(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - (i + 1); j++) {
      row = row + " ";
    }
    for (let k = 0; k < i + 1; k++) {
      row = row + "*";
    }
    console.log(row);
  }
}
sixPatten(5);

// question seven

function sevenPatten(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      if (j % 2 == 0) {
        row = row + "0";
      } else {
        row = row + "1";
      }
    }
    console.log(row);
  }
}
sevenPatten(10);
function eightPatten(n) {
  let toggle = 1;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + toggle;
      if (toggle == 1) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }
    console.log(row);
  }
}
eightPatten(6);
