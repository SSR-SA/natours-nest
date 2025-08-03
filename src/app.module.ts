import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TourModule } from './modules/tour/tour.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), TourModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
