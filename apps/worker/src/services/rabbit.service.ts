import { Controller, Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CloudinaryService } from './cloudinary.service';
import { WebSocketService } from './websocket.service';
import { RedisService } from './redis.service';

@Injectable()
@Controller()
export class RabbitService {
  constructor(
    private readonly cloudinaryService: CloudinaryService,
    private readonly webSocketService: WebSocketService,
    private readonly redisService: RedisService,
  ) {}

  @MessagePattern('image_request')
  async handleImageTask(message: {
    publicId: string;
    socketId: string;
  }): Promise<object> {
    const { publicId, socketId } = message;
    const requestCloudinary = await this.cloudinaryService.getCloudinaryImage(
      publicId,
    );
    const request = {
      image: requestCloudinary,
      socketId: socketId,
    };

    this.webSocketService.emitImageReady(request);

    // this.redisService.set(message, JSON.stringify(request));
    return { status: 'ok', received: message };
  }
}
