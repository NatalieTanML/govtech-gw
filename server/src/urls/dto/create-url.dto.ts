import { IsUrl, IsNotEmpty } from 'class-validator';

export class CreateUrlDto {
  @IsUrl()
  @IsNotEmpty()
  readonly longUrl: string;
}
