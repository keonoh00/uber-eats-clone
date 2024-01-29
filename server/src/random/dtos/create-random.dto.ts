import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateRandomDto {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Number)
  year: number;

  @Field(() => Boolean, { nullable: true })
  isVegan?: boolean;
}
