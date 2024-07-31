const data = "global data";

// このreturnDataに代入される関数の形をアロー関数に変えて"global data"が表示されるようにしてください
// ↓関数の中の処理は変更しないでください
const returnThisData = () => object.data;
// ↑関数の中の処理は変更しないでください

const object = {
  data: data,
  func: returnThisData,
};

function getData() {
  return object.func();
}
