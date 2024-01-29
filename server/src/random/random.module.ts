import { Module } from '@nestjs/common';
import { RandomResolver } from './random.resolver';

@Module({
  providers: [RandomResolver],
})
export class RandomModule {}
