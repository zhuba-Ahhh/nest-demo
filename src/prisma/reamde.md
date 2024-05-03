# bash

数据模型映射到数据库模式(即创建相应的数据库表)
`npx prisma migrate dev --name init`

自动根据已经存在的数据库生成文件 prisma/schema.prisma
`npx prisma db pull`

改变现有的原型架构，例如在某一个表中新增某个字段
`npx prisma db push`
