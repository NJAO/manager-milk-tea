import { Injectable } from '@nestjs/common';

@Injectable()
export class IndexService {
  fetch(id: number): string {
    return `Joan done! ${id}`;
  }
  save(msg: string, id: number): string {
    return `ID:${id} message:${msg}`;
  }
  update(id: number, msg: string): string {
    return `ID:${id} message:${msg} update success`;
  }
  remove(id: number): string {
    return `ID:${id} remove success`;
  }
}
