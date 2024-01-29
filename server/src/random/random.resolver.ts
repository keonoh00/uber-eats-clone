import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ERandom } from './entities/random.entity';
import { CreateRandomDto } from './dtos/create-random.dto';

@Resolver(() => ERandom)
export class RandomResolver {
  @Query(() => [ERandom])
  randoms(@Args('veganOnly') veganOnly: boolean): ERandom[] {
    return [
      {
        id: 123412341234,
        name: 'MyName',
        year: 200434,
        isVegan: veganOnly,
      },
    ];
  }

  @Mutation(() => Boolean)
  createRandom(@Args() createRandomInput: CreateRandomDto): boolean {
    console.log(createRandomInput);
    return true;
  }
}
