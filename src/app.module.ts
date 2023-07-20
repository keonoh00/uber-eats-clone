import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { RandomModule } from './random/random.module';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    RandomModule,
    // GraphQLModule.forRoot() is same as below code in NestJS way
    /*
    cosnt server = new ApolloServer({
      typeDefs,
      resolvers,
    })
    */
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
