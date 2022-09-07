const loadConfig = (): object => {
  return {
    autoLoadEntities: true,
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'admin',
    database: 'milk_tea',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
  };
};
export default loadConfig;
