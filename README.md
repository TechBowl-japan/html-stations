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

HomeBrewを使ってインストールすることを想定しています。

#### 1. HomeBrew のインストール

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

Windowsでの初期設定を行うためには、コマンドラインインターフェイス（CLI）の操作を行う必要があります。

#### PowerShellの起動方法

Windowsでは、**PowerShell**とよばれるコマンドラインインターフェイスが標準で搭載されています。

#### Scoopを用いた環境構築（推奨）

[Chocolatey](https://chocolatey.org/)など他のパッケージ管理ツールもありますが、
[Scoop](https://scoop.sh/)を用いた環境構築を推奨します。

Scoopをインストールするには、PowerShellを**管理者権限**で起動し、以下のコマンドを入力します：

```powershell
iwr -useb get.scoop.sh | iex
```

インストールに失敗する際は、以下のコマンドを入力してから再度上のコマンドを入力してみましょう：

```powershell
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
```

これらの操作を行うためには、ユーザーアカウントに[管理者権限](https://support.microsoft.com/ja-jp/windows/63267a09-9926-991a-1c77-d203160c8563)があることが前提となります。

#### Git、nodeおよびyarnのインストール

Railwayを進めるには、**Git**、**node**、**yarn**のインストールが必要です。管理者権限で起動したPowerShellに以下のコマンドを入力して、Scoopを経由してインストールしましょう：

```powershell
scoop install git nodejs-lts yarn
```

#### `html-stations`リポジトリのクローン

"Use this template"から作成したリポジトリを、作業するディレクトリにクローンしましょう。

```powershell
git clone https://github.com/{ユーザー名}/html-stations.git
```

#### パッケージのインストール

クローンしたばかりのリポジトリは歯抜けの状態なので、必要なファイルをダウンロードする必要があります。`yarn install`コマンドで自動化されているので、これを実行します。
10分程度掛かることもあるため、気長に待ちましょう。

```powershell
cd html-stations
yarn install
```

#### Gitフックのセットアップ

```powershell
yarn hook:update
```

#### TechTrainへのログイン

```powershell
yarn login:techtrain
```
