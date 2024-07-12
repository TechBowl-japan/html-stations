# 環境構築

1. Node.js（v18以降を推奨します。）
2. Yarn (v1)
3. Visual Studio Code
4. Railway VSCode 拡張機能

上記 4 つをインストールする必要があります。インストールできているかの確認やインストール方法は、
[Railway 準備編](https://www.notion.so/techbowl/Railway-ceba695d5014460e9733c2a46318cdec)をご確認いただき、挑戦の準備をしましょう。

# 自分のリポジトリの状態を最新の TechBowl-japan/html-stations と合わせる

Fork したリポジトリは、Fork 元のリポジトリの状態を自動的に反映してくれません。
Station の問題やエラーの修正などがなされておらず、自分で更新をする必要があります。 何かエラーが出た、または運営から親リポジトリを更新してくださいと伝えられた際には、こちらを試してみてください。

## 準備

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

## 自分のリポジトリの状態を最新に更新

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

# トラブルシューティング

## GitHubアカウントでサインアップしたので、パスワードがないという方へ

https://techtrain.dev/resetpassword

上記のURLより自分の登録したメールアドレスより、パスワードリセットを行うことで、パスワードを発行してください。

メールアドレスがわからない場合は、ログイン後にユーザー情報の編集画面で確認してください。
ログインしていれば、次のURLから確認できます。

https://techtrain.dev/mypage/profile

## 最新の状態に更新後、Gitでのコミットに失敗する場合

TechTrain Railway CLI が最新の更新で取り除かれ、Railway への挑戦は VSCode 機能拡張に一本化されます。
そのため、Git Hooks に関連する機能も削除されました。すでに挑戦を開始している方は、pre-commit hook が残っており Git でのコミットに失敗する可能性があります。その際は、


```shell
rm .git/hooks/pre-commit
```

を実行してください。

## WSL（Windows） でテストが失敗する場合

ヘッドレスブラウザによるE2Eによるテストの都合上、WSL ではなく Windows ネイティブでの実行を推奨しています。

WSL で本 Railway を進める際は、Playwright の依存関係を WSL 側にインストールする必要があります。

```shell
sudo yarn playwright install-deps
```
