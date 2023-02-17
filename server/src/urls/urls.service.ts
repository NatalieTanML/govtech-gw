import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Url, UrlDocument } from './schemas/url.schema';
import { CreateUrlDto } from './dto/create-url.dto';
import { generateShortUrl } from 'src/utils/url';

@Injectable()
export class UrlsService {
  constructor(@InjectModel(Url.name) private urlModel: Model<UrlDocument>) {}

  async createUrl(createUrlDto: CreateUrlDto): Promise<string> {
    const shortUrl = generateShortUrl();
    const createdUrl = new this.urlModel({ shortUrl, ...createUrlDto });
    createdUrl.save();
    return shortUrl;
  }

  async getShortUrl(longUrl: string): Promise<string> {
    const url = await this.urlModel.findOne({ longUrl: longUrl }).exec();
    return url ? url.shortUrl : '';
  }

  async getLongUrl(shortUrl: string): Promise<string> {
    const url = await this.urlModel.findOne({ shortUrl: shortUrl }).exec();
    return url ? url.longUrl : '';
  }
}
