# 使用一个现有的 Node.js 映像作为基础映像
FROM node:latest

# 更新 apt-get 并安装 Git
RUN apt-get update && apt-get install -y git

# 安装 TypeScript
RUN npm install -g typescript
