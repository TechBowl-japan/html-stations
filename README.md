# TechTrain HTML/CSS/JavaScript Railway について

Railway では Git で自分が取り組んだ内容を記録するときに、自動でテストが実行されます。この際、Station の内容に即した実装になっているかを最低限のラインとして確認します。
テストが通れば Station クリアとなります。
クリア後、TechTrain の画面に戻り、クリアになっているかを確認してみてください。

[ユーザーマニュアル](https://docs.google.com/presentation/d/1hyBsiAnIjDoaW6hqPe1veF-2NI0wL9cqS73RqLmz6EI/edit?usp=sharing)

# 初期設定

### 必要なツール

1. Node.js v16以降（v18以降を推奨します。）
2. Yarn (v1)
3. Visual Studio Code
4. Railway VS Code拡張

上記 4 つをインストールする必要があります。

### インストール済みの場合

```shell
yarn install
yarn playwright install
code .
```

のコマンドを実行し、すぐに問題に取り組み始めることができます。

Station の問題は、TechTrain の画面で確認してください。

# Mac における初期設定

Homebrew を使ってインストールすることを想定しています。

#### 1. Homebrew のインストール

[Homebrew](https://brew.sh/index_ja) 公式の案内にしたがってインストールしてください。

すでにインストール済みの方は、この手順を飛ばしてください。

インストールされたかどうかを確認するには、Terminal.app を開いて

```shell
brew -v
```

を実行してください。インストール済みであれば次のような表示になるはずです。

![スクリーンショット 2021-04-25 15 42 19](https://user-images.githubusercontent.com/16362021/115983568-eba85d80-a5dc-11eb-9e1a-49462edc2d46.png)

#### 2. Node.js のインストール

Homebrew を使って、 Node.js をインストールします。
Terminal.app を開き、次のコマンドをコピーアンドペーストで実行してください。

```shell
brew install node
```

インストールされたかどうかを確認するには、Terminal.app を開いて

```shell
node -v
```

を実行してください。インストール済みであれば次のような表示になるはずです。

![スクリーンショット 2021-04-25 16 18 23](https://user-images.githubusercontent.com/16362021/115984382-deda3880-a5e1-11eb-9da3-97c71ad5863b.png)

v から先は、インストールしたバージョンが表示されるため、上記画像の表示と全く同じバージョンでなくても大丈夫です。
本当は Node.js のバージョン管理ツールである `n` や `nodebrew` などのツールを入れた方が実践的ですが、パスの修正などができないとトラブルが起きた時に何もわからなくなるので、わからないうちはお勧めしません。
一旦素直に Homebrew で直接 Node.js の最新版をインストールしておきましょう。

#### 3. Yarn のインストール

Terminal.app を開き、次のコマンドをコピーアンドペーストで実行してください。

```shell
brew install yarn
```

インストールされたかどうかを確認するには、Terminal.app を開いて

```shell
yarn -v
```

を実行してください。インストール済みであれば次のような表示になるはずです。

![スクリーンショット 2021-04-25 15 44 21](https://user-images.githubusercontent.com/16362021/115983603-28745480-a5dd-11eb-9636-bdf4d77ab796.png)

# Windows における初期設定

Windows での初期設定を行うためには、キャラクターユーザーインターフェイス（CUI）の操作を行う必要があります。

#### PowerShell の起動方法

Windows では、**PowerShell**とよばれるシェルが標準で搭載されています。シェルはキャラクターユーザーインターフェイスの 1 つで、ファイルやディレクトリの操作などに特化したものです。

PowerShell を起動するには、スタートボタン（左下にある Windows のロゴ）を右クリックするか、`Win-X`キーを押して以下のメニューを表示してください。
管理者権限を必要とする場合は「Windows PowerShell (管理者)(A)」、それ以外の場合は「Windows PowerShell(I)」をクリックしましょう。

![image](https://user-images.githubusercontent.com/298748/115985113-42199a00-a5e5-11eb-9f7c-85c19f73666b.png)

#### PowerShell を操作する

PowerShell を起動すると、以下のような画面が出てきます。

![image](https://user-images.githubusercontent.com/298748/115985231-d2f07580-a5e5-11eb-9dd8-5e9751df590b.png)

シェルは、上のような**端末**と呼ばれる画面に文字を入力することにより操作します。試しに文字を入力してみましょう。
`>`以下に入力した文字が現れます。`>`のように、入力待ちになっていることを表す記号を**プロンプト**と言います。

プロンプトに文字を入力し`Enter`キーを押すと、コンピュータはその内容（指示）に合わせて動作します。このような指示を**コマンド**と呼びます。コマンドにはさまざまな決まりがありますが、ここではその説明は割愛します。

つぎに、コピー＆ペーストのやり方について説明します。ブラウザ上でコピー（`Ctrl-c`）したものを貼り付けるには、端末上で**右クリック**します。また、端末上の文字をコピーしたいときには、コピーしたい部分をドラッグで選択し**右クリック**します。メモ帳などにペースト（`Ctrl-v`）して正しくコピーできるか確認するといいでしょう。

```powershell
winver
```

では試しに、上のコマンドをコピー＆ペーストして`Enter`キーを押しましょう。以下の画面が出たら成功です。

![image](https://user-images.githubusercontent.com/298748/115985269-0206e700-a5e6-11eb-9394-9a50ed6e9d49.png)

#### 作業ディレクトリ

シェルには、**作業ディレクトリ**というものが存在します。

ファイルやディレクトリがどこにあるかを**パス**と言われる文字列で表現しますが、すべて絶対パスで指定していては煩わしいです。
作業ディレクトリを決めておくと、そのディレクトリとの相対位置でパスを表現できるようになります。住所や部屋番号を言うより、お隣さんや近所の〇〇さんと言ってしまった方が簡単なのと同じです。

そのため多くのコマンドは、作業ディレクトリ上で操作を行うことを想定しています。たとえば、

```powershell
mkdir {ディレクトリ名}
```

のようなコマンドは、`{ディレクトリ名}`に一致するディレクトリを作業ディレクトリ内に作成します。

作業ディレクトリを変更するには、`cd`コマンドを使います。

```powershell
cd （ここにパスが入る）
```

作業ディレクトリの中身を見るには、`dir`コマンドを使います。

```powershell
dir
```

シェルの起動時には、多くの場合ホームディレクトリが作業ディレクトリとして指定してあります。ホームディレクトリは頻繁に用いるものなので、`~`という略称が与えられています。

```powershell
cd ~
```

でホームディレクトリに戻ることを確認しましょう。

#### Scoop を用いた環境構築（推奨）

**パッケージ管理ツール**と呼ばれる、ソフトウェアのインストールを簡単にするためのツールをインストールします。
[Chocolatey](https://chocolatey.org/) など他のパッケージ管理ツールもありますが、
[Scoop](https://scoop.sh/) を用いた環境構築を推奨します。

Scoop をインストールするには、PowerShell を**管理者権限**で起動し、以下のコマンドを入力します：

```powershell
iwr -useb get.scoop.sh | iex
```

インストールに失敗する際は、以下のコマンドを入力してから再度上のコマンドを入力してみましょう：

```powershell
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
```

これらの操作を行うためには、ユーザーアカウントに[管理者権限](https://support.microsoft.com/ja-jp/windows/63267a09-9926-991a-1c77-d203160c8563)があることが前提となります。

#### Git、node および yarn のインストール

Railway を進めるには、**Git**、**node**、**yarn**のインストールが必要です。管理者権限で起動した PowerShell に以下のコマンドを入力して、Scoop を経由してインストールしましょう：

```powershell
scoop install git nodejs-lts yarn
```

#### `html-stations`リポジトリのクローン

"Fork" から作成したリポジトリを作業するディレクトリにクローンしましょう。

```powershell
git clone https://github.com/{ユーザー名}/html-stations.git
```

#### パッケージのインストール

クローンしたばかりのリポジトリは歯抜けの状態なので、必要なファイルをダウンロードする必要があります。
10 分程度掛かることもあるため、気長に待ちましょう。上から順番に**１つずつ**コマンドを実行しましょう：

```powershell
cd html-stations
```

```powershell
yarn install
yarn playwright install
```

## 自分のリポジトリの状態を最新の TechBowl-japan/html-stations と合わせる

Forkしたリポジトリは、Fork元のリポジトリの状態を自動的に反映してくれませんので、自分で更新をする必要があります。
何かエラーが出た際には、こちらを試してみてください。

### 準備

```shell
# 自分が何か変更した内容があれば、 stash した後に実行してください。
git remote add upstream git@github.com:TechBowl-japan/html-stations.git
git fetch upstream
```

これらのコマンドを実行後にうまくいっていれば、次のような表示が含まれています。

```
git branch -a ←このコマンドを実行

* master
  remotes/origin/HEAD -> origin/main
  remotes/origin/main
  remotes/upstream/main ←こちらのような upstream という文字が含まれた表示の行があれば成功です。
```

こちらで自分のリポジトリを TechBowl-japan/html-stations の最新の状態と合わせるための準備は終了です。

### 自分のリポジトリの状態を最新に更新

```
# 自分の変更の状態を stash した上で次のコマンドを実行してください。

# ↓main ブランチに移動するコマンド
git checkout main

# ↓ TechBowl-japan/html-stations の最新の状態をオンラインから取得
git fetch upstream

# ↓ 最新の状態を自分のリポジトリに入れてローカルの状態も最新へ
git merge upstream/main
git push
yarn install
```

## トラブルシューティング

### GitHubアカウントでサインアップしたので、パスワードがないという方へ

https://techtrain.dev/resetpassword

上記のURLより自分の登録したメールアドレスより、パスワードリセットを行うことで、パスワードを発行してください。

メールアドレスがわからない場合は、ログイン後にユーザー情報の編集画面で確認してください。
ログインしていれば、次のURLから確認できます。

https://techtrain.dev/mypage/profile

### 2021/06/01 20:00以前に挑戦して、Station15で詰まっている方へ

1. 問題文を修正しました
2. テストケースの不具合に対しても対応したため、このテキストの上部にある「自分のリポジトリの状態を最新に更新」を試してみてください。

### 最新の状態に更新後、Gitでのコミットに失敗する場合

TechTrain Railway CLIが最新の更新で取り除かれ、Railwayへの挑戦はVS Code機能拡張に一本化されます。
そのため、Git Hooksに関連する機能も削除されました。すでに挑戦を開始している方は、pre-commit hookが残っておりGitでのコミットに失敗する可能性があります。その際は、


```shell
rm .git/hooks/pre-commit
```

を実行してください。

### WSL（Windows）でテストが失敗する場合

ヘッドレスブラウザによるE2Eによるテストの都合上、WSLではなくWindowsネイティブでの実行を推奨しています。

WSLで本Railwayを進める際は、Playwrightの依存関係をWSL側にインストールする必要があります。

```shell
sudo yarn playwright install-deps
```
