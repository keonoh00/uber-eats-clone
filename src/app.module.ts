import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { RandomModule } from './random/random.module';
import { ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ERandom } from './random/entities/random.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Access config module from anywhere in the application
      envFilePath:
        process.env.NODE_ENV === 'prod'
          ? '.env.prod'
          : process.env.NODE_ENV === 'test'
          ? '.env.test'
          : '.env.dev',
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev', 'test', 'prod'),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      /*
      synchronize: When typeORM connects to the database,
      is going to also migrate your db to current state of your module.
      This is when you are using "entities"
      However, in prod, the DB is mostly live, so should not migrate without attention.
      */
      synchronize: process.env.NODE_ENV !== 'prod',
      logging: true,
      entities: [ERandom], //

      // UNKNOWN OPTIONS
      // subscribers: [],
      // migrations: [],
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    // GraphQLModule.forRoot() is same as below code in NestJS way
    /*
    cosnt server = new ApolloServer({
      typeDefs,
      resolvers,
    })
    */
    RandomModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
