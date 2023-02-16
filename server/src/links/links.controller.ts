import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LinksService } from './links.service';
import { CreateLinkDto } from './dto/create-link.dto';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post()
  async create(@Body() createLinkDto: CreateLinkDto) {
    await this.linksService.createLink(createLinkDto);
  }

  @Get(':longUrl')
  async findOne(@Param('longUrl') longUrl: string): Promise<string> {
    return this.linksService.getShortUrl(longUrl);
  }
}
