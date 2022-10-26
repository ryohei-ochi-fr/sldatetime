import { ApiProperty } from '@nestjs/swagger';

enum STATE {
  QUEUED = 'QUEUED',
  RUNNING = 'RUNNING',
  COMPLETED = 'COMPLETED',
  DELETED = 'DELETED',
}

export class CreateJobDto {
  @ApiProperty({
    required: true,
    description: 'ジョブの状態',
    enum: STATE,
    example: STATE.QUEUED,
  })
  state: string;

  @ApiProperty({
    required: true,
    description: 'ジョブの優先度',
    example: 10,
  })
  priority: number;

  @ApiProperty({
    required: true,
    description: 'ジョブの説明文',
    example: 'ffmpegでエンコード',
  })
  description: string;

  @ApiProperty({
    required: true,
    description: '実行完了フラグ',
    example: false,
  })
  completed: boolean;

  @ApiProperty({
    required: false,
    description: '実行開始日時',
    example: '2022-10-01T00:00:00.000Z',
    // example: '2022-10-01 14:00:00',
  })
  beginAt: Date;

  @ApiProperty({
    required: false,
    description: '実行終了日時',
    example: '2022-10-01T00:00:00.000Z',
    // example: '2022-10-01 14:00:00',
  })
  finishAt: Date;
}
