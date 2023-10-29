import { Controller, Get, Header } from '@nestjs/common';

@Controller('api')
export class ApiController {
    @Get('example')
    @Header('Access-Control-Allow-Origin', '*')
    // доступ со всех доменов

    getData() {
        return { message: 'Hello from Nest.js!' };
    }
}