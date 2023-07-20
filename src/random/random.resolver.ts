import { Query, Resolver } from '@nestjs/graphql';
import { ERandom } from './entities/random.entity';

@Resolver(() => ERandom)
export class RandomResolver {
  @Query(() => ERandom)
  queryRandom(): ERandom {
    return {
      name: 'MyName',
      year: 200434,
      isGood: false,
    };
  }
}
