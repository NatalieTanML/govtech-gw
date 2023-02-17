import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUrlDto } from './dto/create-url.dto';
import { UrlsService } from './urls.service';

@Controller()
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  /**
   * Shortens the long URL into a short URL, and adds it to the database.
   * @param createUrlDto The DTO containing the long URL.
   * @returns The short URL identifier.
   */
  @Post()
  async create(@Body() createUrlDto: CreateUrlDto): Promise<string> {
    return this.urlsService.createUrl(createUrlDto);
  }

  /**
   * Gets a long URL by the given short URL identifier.
   * @param res Response
   * @param shortUrl The short URL to query.
   * @returns The long URL matching the short URL.
   */
  @Get(':shortUrl')
  async findByShort(
    @Res() res: Response,
    @Param('shortUrl') shortUrl: string,
  ): Promise<void> {
    const url = await this.urlsService.getLongUrl(shortUrl);
    if (url) {
      return res.redirect(url);
    } else {
      res.status(404).send('Page not found');
    }
  }

  /**
   * Gets a short URL identifier by the given long URL.
   * @param longUrl The long URL to query.
   * @returns The short URL identifier.
   */
  @Get('long/:longUrl')
  async findByLong(@Param('longUrl') longUrl: string): Promise<string> {
    return this.urlsService.getShortUrl(longUrl);
  }
}
