import { Model } from 'mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Url, UrlDocument } from './schemas/url.schema';
import { CreateUrlDto } from './dto/create-url.dto';
import { generateShortUrl } from 'src/utils/url';
import { isURL } from 'class-validator';

@Injectable()
export class UrlsService {
  constructor(@InjectModel(Url.name) private urlModel: Model<UrlDocument>) {}

  async createUrl(createUrlDto: CreateUrlDto): Promise<string> {
    const { longUrl } = createUrlDto;
    if (!isURL(longUrl)) {
      throw new BadRequestException('Input must be a valid URL.');
    }

    const check = await this.getShortUrl(longUrl);
    if (check) {
      // URL was already shortened previously, we can return it
      return check;
    }

    // Else, create a new record in database
    const shortUrl = generateShortUrl();
    const createdUrl = new this.urlModel({ shortUrl, longUrl });
    createdUrl.save();
    return shortUrl;
  }

  async getLongUrl(shortUrl: string): Promise<string> {
    const url = await this.urlModel.findOne({ shortUrl: shortUrl }).exec();
    return url ? url.longUrl : '';
  }

  async getShortUrl(longUrl: string): Promise<string> {
    const url = await this.urlModel.findOne({ longUrl: longUrl }).exec();
    return url ? url.shortUrl : '';
  }
}
