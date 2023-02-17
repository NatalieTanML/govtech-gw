import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUrlDto {
  @IsString()
  @IsNotEmpty()
  readonly longUrl: string;
}
