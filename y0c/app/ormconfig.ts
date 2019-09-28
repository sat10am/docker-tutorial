import { ConnectionOptions } from 'typeorm'
import path from 'path'

const options: ConnectionOptions = {
  type: 'mysql',
  host: 'mariadb',
  port: 3306,
  username: 'todo',
  password: 'admin',
  database: 'todo',
  synchronize: true,
  logging: true,
  entities: [path.join(__dirname, './entities/**/*.ts')],
  migrations: [path.join(__dirname, './migrations/**/*.ts')],
}

export default options
