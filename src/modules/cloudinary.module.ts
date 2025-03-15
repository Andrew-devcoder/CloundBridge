import { Module } from '@nestjs/common';
import { CloudinaryController } from 'src/controllers/cloudinary.controller';
import { CloudinaryService } from 'src/services/cloudinary.service';

@Module({
  imports: [],
  controllers: [CloudinaryController],
  providers: [CloudinaryService],
})
export class CloudinaryModule {}
