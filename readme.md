# install dependencies
yarn

# start docker database
docker start goShoppingDb

# serve with hot reload at localhost:8000
yarn dev

# sequelize
## create migration
yarn sequelize migration:create --name=create-users-table

## run migrations
yarn sequelize db:migrate

## run seeds
yarn sequelize db:seed:all

## revert last migration
yarn sequelize db:migrate:undo
