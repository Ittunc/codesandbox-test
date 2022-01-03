// /**
//  * aaaaa
//  */
// var aaa = 1;
// console.log(aaa);
// aaa = 4;
// console.log(aaa);

// const bbb = 2;
// // console.log(bbb);

// console.log(`こんにてゃ${aaa}です`);

// function func() {
//   console.log("bbbbb");
// }

// func();

// const func2 = (a, b) => a + b;
// console.log(func2(3, 4));

// const myProfile = {
//   name: "あああん",
//   age: 28
// };

// // const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// // console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile2 = ["あああ", 28];
// const [name2, age2] = myProfile2;
// console.log(name2, age2);

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello();

// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

const nameArr = ["a", "b", "c"];
// // 従来の方法
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// // map
// // 配列の中身の要素が引数nameに入ってくる
// // returnされた結果を使って新しい配列が生成する
// const nameArr2 = nameArr.map((name) => {
//   return name + "さ";
// });
// console.log(nameArr2); //['aさ', 'bさ', 'cさ']

// // 配列をループさせて処理する
// nameArr.map((name) => console.log(name + "u"));

// nameArr.map((name, index) => console.log(`${name},${index}`));

// // filter
// // return文に条件式を書いて満たすものだけ取り出す
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr); //[1, 3, 5]

/**
 * 三項演算子
 */

//ある条件? 条件がTrueの時 : 条件がFalseの時

// const val1 = 1 > 0 ? "a" : "b";
// console.log(val1);//a

// || は左側がFalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee); //金額未設定です

// && は左側がTrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2); // null
