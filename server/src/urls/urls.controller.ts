import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUrlDto } from './dto/create-url.dto';
import { UrlsService } from './urls.service';

@Controller()
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  @Post()
  async create(@Body() createUrlDto: CreateUrlDto): Promise<string> {
    return this.urlsService.createUrl(createUrlDto);
  }

  @Get(':shortUrl')
  async findByShort(
    @Res() res: Response,
    @Param('shortUrl') shortUrl: string,
  ): Promise<void> {
    const url = await this.urlsService.getLongUrl(shortUrl);
    return res.redirect(url);
  }

  @Get('long/:longUrl')
  async findByLong(@Param('longUrl') longUrl: string): Promise<string> {
    return this.urlsService.getShortUrl(longUrl);
  }
}
