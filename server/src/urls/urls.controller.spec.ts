import { Test, TestingModule } from '@nestjs/testing';
import { CreateUrlDto } from './dto/create-url.dto';
import { Url } from './schemas/url.schema';
import { UrlsController } from './urls.controller';
import { UrlsService } from './urls.service';

describe('UrlsController', () => {
  let urlsController: UrlsController;
  let urlsService: UrlsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrlsController],
      providers: [
        {
          provide: UrlsService,
          useValue: {
            createUrl: jest.fn(),
            getShortUrl: jest.fn(),
          },
        },
      ],
    }).compile();

    urlsController = module.get<UrlsController>(UrlsController);
    urlsService = module.get<UrlsService>(UrlsService);
  });

  it('should be defined', () => {
    expect(urlsController).toBeDefined();
  });

  describe('createUrl', () => {
    it('should return the shortened URL', async () => {
      const createUrlDto: CreateUrlDto = {
        longUrl: 'https://google.com',
      };
      const createdUrl: Url = {
        shortUrl: 'xyz789',
        longUrl: createUrlDto.longUrl,
      };
      (urlsService.createUrl as jest.Mock).mockResolvedValue(createdUrl);

      const response = await urlsController.create(createUrlDto);

      expect(response).toEqual(createdUrl);
    });
  });
});
