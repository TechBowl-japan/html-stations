async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
  ];
  const result = await test(userList)
  return await result
}

function test(user) {
  var data = new Promise((resolve, reject) => {
    setTimeout(()=>{
      const suscces = true;
      if(suscces){
          resolve(user = user.map(list=>{
              return {id:list.id, full_name:list.family_name+' '+list.first_name,first_name: list.first_name, family_name: list.family_name, affiliation: list.affiliation, is_student: list.is_student}
              }
            )
          )
        }
      },3000);
    }
  );
  return data
}

