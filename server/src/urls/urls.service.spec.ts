import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Url } from './schemas/url.schema';
import { UrlsService } from './urls.service';

// TODO: write tests

describe('UrlsService', () => {
  let urlsService: UrlsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UrlsService,
        {
          provide: getModelToken(Url.name),
          useValue: jest.fn(),
        },
      ],
    }).compile();

    urlsService = module.get<UrlsService>(UrlsService);
  });

  it('should be defined', () => {
    expect(urlsService).toBeDefined();
  });
});
