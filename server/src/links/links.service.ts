import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Link, LinkDocument } from './schemas/link.schema';
import { generateShortUrl } from 'src/utils/url';

@Injectable()
export class LinksService {
  constructor(@InjectModel(Link.name) private linkModel: Model<LinkDocument>) {}

  async createLink(longUrl: string): Promise<Link> {
    const shortUrl = generateShortUrl();
    const createdLink = new this.linkModel({ shortUrl, longUrl });
    return createdLink.save();
  }

  async getShortUrl(longUrl: string): Promise<string> {
    const link = await this.linkModel.findOne({ longUrl }).exec();
    return link.shortUrl;
  }
}
