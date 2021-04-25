# TechTrain HTML/CSS/JavaScript Railway について

Railwayでは、Gitで自分が取り組んだ内容を記録する際に、自動でテストが実行され、Stationの内容に即した実装になっているかを最低限のラインとして確認します。
チェックが通れば、Stationクリアになるようになっています。
クリア後、TechTrainの画面に戻り、クリアになっているかを確認してみてください。

## 初期設定

### 必要なツール

1. Node.js
2. Yarn

上記つをインストールする必要があります。

### Macにおける初期設定

Homebrewを使ってインストールすることを想定しています。

#### 1. Homebrew のインストール

Terminal.app を開き、次のコマンドをコピーアンドペーストで実行してください。

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)`

すでにインストール済みの方は、この手順を飛ばしてください。
インストールされたかどうかを確認するには、Terminal.appを開いて

`brew -v`

を実行してください。インストール済みであれば次のような表示になるはずです。

![スクリーンショット 2021-04-25 15 42 19](https://user-images.githubusercontent.com/16362021/115983568-eba85d80-a5dc-11eb-9e1a-49462edc2d46.png)


何か起こった際には次の公式サイトを確認してください。

https://brew.sh/index_ja

#### 2. Node.js のインストール

Homebrew を使って、 Node.js をインストールします。
Terminal.app を開き、次のコマンドをコピーアンドペーストで実行してください。

`brew install node`

インストールされたかどうかを確認するには、Terminal.appを開いて

`node -v`

を実行してください。インストール済みであれば次のような表示になるはずです。

![スクリーンショット 2021-04-25 16 18 23](https://user-images.githubusercontent.com/16362021/115984382-deda3880-a5e1-11eb-9da3-97c71ad5863b.png)

vから先は、インストールしたバージョンが表示されるため、上記画像の表示と全く同じものではなくとも大丈夫です。

本当は、 Node.jsのバージョン管理ツールである `n` や `nodebrew` などのツールを入れた方が実践的ですが、パスの修正などができないとトラブルが起きた時に何もわからなくなるので、わからないうちはお勧めしません。
一旦素直に Homebrew で直接 Node.js の最新版をインストールしておきましょう。


#### 3. Yarn のインストール

Terminal.app を開き、次のコマンドをコピーアンドペーストで実行してください。

`brew install yarn`

インストールされたかどうかを確認するには、Terminal.appを開いて

`yarn -v`

を実行してください。インストール済みであれば次のような表示になるはずです。

![スクリーンショット 2021-04-25 15 44 21](https://user-images.githubusercontent.com/16362021/115983603-28745480-a5dd-11eb-9636-bdf4d77ab796.png)

### Windowsにおける初期設定


