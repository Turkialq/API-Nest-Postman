import { Body, Controller, Get, Post, Req, Header } from '@nestjs/common';
import { Request } from 'express';
import { getSupportInfo } from 'prettier';
import { AppService } from './app.service';

@Controller() // domain/cat/anything()
export class AppController {
  constructor(private readonly appService: AppService) { } // nestJS will create instance of this class

  @Get('hi')// get/cat
  @Header('Content-Type', 'text/html')
  getHello(): string {
    return "hello Peak Innovation"
  }

}




