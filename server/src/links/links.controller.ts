import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LinksService } from './links.service';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post()
  async create(@Body() longUrl: string) {
    await this.linksService.createLink(longUrl);
  }

  @Get(':longUrl')
  async findOne(@Param('longUrl') longUrl: string): Promise<string> {
    return this.linksService.getShortUrl(longUrl);
  }
}
