import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUrlDto } from './dto/create-url.dto';
import { UrlsService } from './urls.service';

@Controller('urls')
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  @Post()
  async create(@Body() createUrlDto: CreateUrlDto): Promise<string> {
    return this.urlsService.createUrl(createUrlDto);
  }

  @Get('long/:longUrl')
  async findByLong(@Param('longUrl') longUrl: string): Promise<string> {
    return this.urlsService.getShortUrl(longUrl);
  }

  @Get(':shortUrl')
  async findByShort(@Param('shortUrl') shortUrl: string): Promise<string> {
    return this.urlsService.getLongUrl(shortUrl);
  }
}
