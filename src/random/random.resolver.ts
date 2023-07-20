import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RandomResolver {
  @Query(() => Boolean)
  isThisGood(): boolean {
    return true;
  }
}
