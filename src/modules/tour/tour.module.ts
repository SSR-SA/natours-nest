import { Module } from '@nestjs/common';
import { TourController } from 'src/controllers/tour.controller';
import { TourService } from 'src/services/tour.services';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [TourController],
  providers: [TourService, PrismaService],
})
export class TourModule {}
