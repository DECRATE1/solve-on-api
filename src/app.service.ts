import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { promises as fs } from 'fs';

@Injectable()
export class AppService {
  private readonly storage = join(__dirname, '..', 'forms');

  async logForm(data: { name: string; phone: string }) {
    try {
      await fs.mkdir(this.storage, { recursive: true });
      await fs.appendFile(
        join(this.storage, 'forms.txt'),
        `Имя: ${data.name}, Тел: ${data.phone} \n`,
        'utf8',
      );
    } catch (err) {
      throw new Error('Error' + err);
    }
  }
}
