import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ERandom {
  @Field(() => String)
  name: string;

  @Field(() => Number)
  year: number;

  @Field(() => Boolean, { nullable: true })
  isGood?: boolean;
}
