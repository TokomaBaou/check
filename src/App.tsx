import "./styles.css";

interface SearchInputState {
  form: {
    keyword: string;
    publishYmd: string;
    prosFlg: boolean;
  };
}

const searchInput: SearchInputState = {
  form: {
    // keyword: "",
    // publishYmd: "2020/01/01",
    // prosFlg: false
    keyword: "",
    publishYmd: "",
    prosFlg: false
  }
};

export const App = () => {
  // 1.検索条件が全て空の場合に警告メッセージを表示する(trueの時)

  // const onSubmit = (values:SearchInputState['form']) => {
  //     if (
  // !(Object.keys(values) as (keyof SearchInputState["form"])[]).some((key) =>
  //   Boolean(values[key])
  //   )
  //   ...

  // };

  const check = !(Object.keys(
    searchInput.form
  ) as (keyof SearchInputState["form"])[]).some((key) =>
    Boolean(searchInput.form[key])
  );

  console.log(check);

  // Object.key() -> オブジェクトのプロパティを取得する(連想配列で使えば、キーを取得する)
  const pro = Object.keys(searchInput.form);
  // console.log(pro);

  // as は型アサーション。その推論された型や、既に型定義済みの変数の型を上書きします。
  // keyof はオブジェクト型からプロパティ名を型として返す型演算子

  // some() -> 配列が条件を一つでも満たしていればtrueを返す

  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  arr.some((value) => value < 10);
  // -> return true

  arr.every((value) => value > 11);
  // -> return false

  // Boolean() -> '文字列が空文字""の時のみfalseに変換され、他の文字列は全てtrueに変換されます。'
  const item1 = Boolean("");
  // console.log(item1);
  const item2 = Boolean(0);
  // console.log(item2);

  return (
    <div className="App" style={{ display: "flex", flexFlow: "column" }}>
      <input
        type="text"
        name="keyword"
        placeholder="keyword"
        style={{ marginTop: "10px" }}
      ></input>
      <input
        type="date"
        name="keyword"
        placeholder="keyword"
        style={{ marginTop: "10px" }}
      ></input>
      <input
        type="checkbox"
        name="prosFlg"
        style={{ marginTop: "10px" }}
      ></input>
      <button style={{ marginTop: "10px" }}>送信</button>
    </div>
  );
};
