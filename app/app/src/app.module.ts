import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getEnvPath } from './common/helper/env.helper';
import { getConnectionString } from './dbconfig/dbconfig';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [ConfigModule.forRoot({envFilePath, isGlobal: true}), MongooseModule.forRoot(getConnectionString())],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}