//Homework 2
//Riwen Mao

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

//Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
const doubleQtyPrc = (arr) => {
  return arr.map((e) => {
    return { quantity: e.quantity * 2, price: e.price * 2 };
  });
};
console.log("new array:");
console.log(doubleQtyPrc(itemsObject));

//Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
const filterQtyPrc = (arr) => {
  return arr.filter((e) => {
    return e.quantity > 2 && e.price > 300;
  });
};
console.log("new array:");
console.log(filterQtyPrc(itemsObject));

//Given the array, implement a function to calculate the total value of the items.
const getSum = (arr) => {
  return arr.reduce((acc, cur) => {
    let price = cur.quantity * cur.price;
    return (acc += price);
  }, 0);
};
console.log("sum:");
console.log(getSum(itemsObject));
console.log("old array:");
console.log(itemsObject);

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return \
The Sum Of  All The Elements In  An Array  ";

const formatStr = (str) => {
  //to lower case, replace all non-alphabets to spaces
  str = str.toLowerCase().replace(/[^a-z ]/g, " ");
  let str_arr = str.split(/[ ]/);
  str_arr = str_arr.filter((e) => e !== ""); //erase all empty str elements
  return str_arr.join(" ");
};

const res = formatStr(string);
console.log(res);

//Implement a function to merge two arrays of objects on uuid,
// but first has uuid and name, second has uuid and role. With
//the not existing property, fill with null. Sort according to uuid after merge.
const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];
const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const mergeAndSort = (first, second) => {
  second = second.map((e) => {
    return { uuid: e.uuid, name: null, role: e.role };
  });

  first.forEach((e1) => {
    let notFound = true;
    for (e2 of second) {
      if (e2.uuid === e1.uuid) {
        //same uuid, merge
        e2 = { uuid: e2.uuid, name: e1.name, role: e2.role };
        notFound = false; //so it does not execute code below the e2 for loop
        break;
      }
    }
    //e1 not in e2, append to e2
    if (notFound) {
      second.push({ uuid: e1.uuid, name: e1.name, role: null });
    }
  });

  //sort second arr via uuid
  const partition = (arr, lo, hi) => {
    const pivot = arr[hi].uuid;
    let i = lo - 1;
    for (let j = lo; j < hi; j++) {
      if (arr[j].uuid < pivot) {
        i++;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[hi];
    arr[hi] = temp;
    return i + 1;
  };
  const quickSort = (arr, lo, hi) => {
    if (lo < hi) {
      const pi = partition(arr, lo, hi);
      quickSort(arr, lo, pi - 1);
      quickSort(arr, pi + 1, hi);
    }
  };
  quickSort(second, 0, second.length - 1);
  return second;
};
console.log(mergeAndSort(first, second));
