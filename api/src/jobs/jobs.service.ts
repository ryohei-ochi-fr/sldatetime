import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { parse, parseISO } from 'date-fns';

@Injectable()
export class JobsService {
  constructor(private prisma: PrismaService) {}

  create(createJobDto: CreateJobDto) {
    console.log(createJobDto.beginAt.toString());

    const beginAt = parseISO(createJobDto.beginAt.toString());
    const finishAt = parseISO(createJobDto.finishAt.toString());

    // const beginAt = parse(
    //   createJobDto.beginAt.toString(),
    //   'yyyy-MM-dd HH:mm:ss',
    //   new Date(),
    // );

    // const finishAt = parse(
    //   createJobDto.finishAt.toString(),
    //   'yyyy-MM-dd HH:mm:ss',
    //   new Date(),
    // );

    console.log(beginAt);
    console.log(finishAt);

    createJobDto.beginAt = beginAt;
    createJobDto.finishAt = finishAt;

    return this.prisma.jobs.create({ data: createJobDto });
  }

  findAll() {
    return `This action returns all jobs`;
  }

  findOne(id: number) {
    return this.prisma.jobs.findUnique({ where: { id } });
  }

  update(id: number, updateJobDto: UpdateJobDto) {
    return this.prisma.jobs.update({
      where: { id },
      data: updateJobDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} job`;
  }
}
