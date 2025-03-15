import { Module, Global } from '@nestjs/common';
// import { redisClient, connectRedis } from '../conf/redis.config';
import { RedisController } from 'src/controllers/redis.controller';
import { RedisService } from 'src/services/redis.service';

@Module({
  // providers: [
  //   {
  //     provide: 'REDIS_CLIENT',
  //     useFactory: async () => {
  //       await connectRedis();
  //       return redisClient;
  //     },
  //   },
  // ],
  // exports: ['REDIS_CLIENT'],
  imports: [],
  controllers: [RedisController],
  providers: [RedisService],
})
export class RedisModule {}
