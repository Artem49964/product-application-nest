import * as process from "process";
import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "./pipes/validation.pipe";
import * as cors from 'cors';

async function start() {

    const PORT = process.env.PORT || 5001
    const app = await NestFactory.create(AppModule)
    app.use(cors());


    const config = new DocumentBuilder()
        .setTitle('Product Application API')
        .setDescription('Это документация по руководству данной API, а таккже ендпоинты по которым мы можем делать HTTP запросы')
        .setVersion('1.0.0')
        .build()

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document)

        app.useGlobalPipes(new ValidationPipe())

    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}


start()