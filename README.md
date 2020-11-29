# webpack5の新機能ー後編

webpack5の新機能であるモジュールフェデレーションのサンプルです。

https://github.com/codegrid/2020-webpack5-mf-www と連携します。

## サンプルの使い方

```
# リポジトリをクローンしたら
npm install

npm run dev
```

localhost:3002でサーバーが起動し、2020-webpack5-mf-wwwのlocalhost:3001をリモートとして参照します。

そのため、2020-webpack5-mf-wwwが起動していないと、ランタイムエラーになります。
