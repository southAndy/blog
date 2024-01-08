# 當執行 script 報錯時，就會終止後續執行
set -e

# 執行專案打包
npm run docs:build

# 移動到打包輸出的資料夾
cd docs/.vuepress/dist

# 當你有專屬 domain 的設定
# echo www.andy-walking.dev

# 拷贝目录和文件
# cp -r ../../../.github ./
# cp -r ../../../CNAME ./

git init
git add -A
git commit -m 'deploy'


# 部署到 github pages
git push -f git@github.com:southAndy/blog.git main:gh-pages