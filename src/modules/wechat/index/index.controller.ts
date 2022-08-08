import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { IndexService } from './index.service';

@Controller('/wechat/index')
export class IndexController {
  constructor(private readonly indexService: IndexService) {}

  @Get()
  fetch(@Query() { id }): string {
    return this.indexService.fetch(id);
  }

  @Post()
  save(@Body() { msg, id }): string {
    return this.indexService.save(msg, id);
  }

  @Patch(':id')
  update(@Param() { id }, @Body() { msg }): string {
    return this.indexService.update(id, msg);
  }

  @Delete(':id')
  remove(@Param() { id }): string {
    return this.indexService.remove(id);
  }
}
