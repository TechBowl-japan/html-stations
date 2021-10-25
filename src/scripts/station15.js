// const { values } = require("fp-ts/lib/Map");
const { some } = require("fp-ts/lib/ReadonlyRecord");
const { textSpanContainsPosition } = require("typescript");

async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affilication: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affilication: 'HogeHoge大学', is_student: true }
  ];
  const result = await test(userList)
  // const result = await userList.map(buildFullName)
  return await result
}

function test(list) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(list.map(buildFullName))
    },3000)
  })
  return promise;
}

function buildFullName(data) {
  const full_name = `${data.family_name} ${data.first_name}`;
  data["full_name"] = full_name;
  return data;
}
