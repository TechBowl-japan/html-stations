# TechTrain HTML/CSS/JavaScript Railway について

Railwayでは、Gitで自分が取り組んだ内容を記録する際に、自動でテストが実行され、Stationの内容に即した実装になっているかを最低限のラインとして確認します。
チェックが通れば、Stationクリアになるようになっています。
クリア後、TechTrainの画面に戻り、クリアになっているかを確認してみてください。

## 使い方

### 必要なツール

1. Node.js
2. Yarn

上記二つをインストールする必要があります。

#### Macにおけるインストール方法

HomeBrewを使ってインストールすることを想定しています。

##### 1. HomeBrew のインストール

Terminal.app を開き、次のコマンドをコピーアンドペーストで実行してください。

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)`

すでにインストール済みの方は、この手順を飛ばしてください。
インストールされたかどうかを確認するには、Terminal.appを開いて

`brew -v`

を実行してください。インストール済みであれば次のような表示になるはずです。

![スクリーンショット 2021-04-25 15 42 19](https://user-images.githubusercontent.com/16362021/115983568-eba85d80-a5dc-11eb-9e1a-49462edc2d46.png)


何か起こった際には次の公式サイトを確認してください。

https://brew.sh/index_ja

##### 2. Yarn のインストール

Terminal.app を開き、次のコマンドをコピーアンドペーストで実行してください。

`brew install yarn`

インストールされたかどうかを確認するには、Terminal.appを開いて

`yarn -v`

を実行してください。インストール済みであれば次のような表示になるはずです。

![スクリーンショット 2021-04-25 15 44 21](https://user-images.githubusercontent.com/16362021/115983603-28745480-a5dd-11eb-9636-bdf4d77ab796.png)
