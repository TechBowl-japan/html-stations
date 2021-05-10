async function getData() {
    // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
    const result = await test()
    return await result
}

function test() {
  return new Promise((r) =>
    setTimeout(
      () =>
        r([
          {
            id: 1,
            full_name: '大木 優',
          },
          {
            id: 2,
            full_name: '山田 太郎',
          },
        ]),
      3000
    )
  )
}

