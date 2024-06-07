import { IEntityBase } from 'libs/shared/domain/models/entities/entity-base';
import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

export abstract class BaseModel implements IEntityBase {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @CreateDateColumn({
    type: 'timestamp with time zone',
    generated: true,
    nullable: false,
  })
  createdAt?: Date;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
    generated: true,
    nullable: false,
  })
  updatedAt?: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date;

  @VersionColumn()
  version: number;
}
