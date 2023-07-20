import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { RandomModule } from './random/random.module';
import { ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule
      .forRoot
      // Options will be configured in env file
      (),
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
