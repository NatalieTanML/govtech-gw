import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Link, LinkDocument } from './schemas/link.schema';
import { CreateLinkDto } from './dto/create-link.dto';
import { generateShortUrl } from 'src/utils/url';

@Injectable()
export class LinksService {
  constructor(@InjectModel(Link.name) private linkModel: Model<LinkDocument>) {}

  async createLink(createLinkDto: CreateLinkDto): Promise<string> {
    const shortUrl = generateShortUrl();
    const createdLink = new this.linkModel({ shortUrl, ...createLinkDto });
    createdLink.save();
    return shortUrl;
  }

  async getShortUrl(longUrl: string): Promise<string> {
    const link = await this.linkModel.findOne({ longUrl }).exec();
    return link.shortUrl;
  }

  async getLongUrl(shortUrl: string): Promise<string> {
    const link = await this.linkModel.findOne({ shortUrl }).exec();
    return link.longUrl;
  }
}
