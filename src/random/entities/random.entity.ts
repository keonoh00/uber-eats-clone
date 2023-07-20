import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType() // ObjectType is a decorator that graphQL takes to build schema automatically
@Entity()
export class ERandom {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => Number)
  @Column()
  year: number;

  @Field(() => Boolean, { nullable: true })
  @Column()
  isVegan?: boolean;
}
