import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { LinksService } from './links.service';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post()
  async create(@Body() createLinkDto: CreateLinkDto): Promise<string> {
    return this.linksService.createLink(createLinkDto);
  }

  @Get(':longUrl')
  async findOne(@Param('longUrl') longUrl: string): Promise<string> {
    return this.linksService.getShortUrl(longUrl);
  }
}
