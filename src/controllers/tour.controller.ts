import { Controller, Get, Param } from '@nestjs/common';
import { TourService } from 'src/services/tour.services';

@Controller('api/v1/tours')
export class TourController {
  constructor(private readonly tourService: TourService) {}

  @Get()
  getAllTours() {
    return this.tourService.getAllTours();
  }

  @Get(':id')
  getTour(@Param('id') id: string) {
    return this.tourService.getTourById(id);
  }
}
