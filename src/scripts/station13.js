data = "grobal data";

// このreturnDataに代入される関数の形をアロー関数に変えて"grobal data"が表示されるようにしてください
// 関数の中の処理は変更しないでください
const returnThisData = function () {
  return this.data;
}

const object = {
  data: "object data",
  func: returnThisData,
};

function getData() {
  return object.func();
}