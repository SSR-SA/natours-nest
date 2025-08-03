import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TourService {
  constructor(private prisma: PrismaService) {}

  getAllTours() {
    return this.prisma.tour.findMany();
  }

  getTourById(id: string) {
    return this.prisma.tour.findUnique({ where: { id: Number(id) } });
  }
}
