import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { RequestService } from 'src/request.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private readonly logger = new Logger(AuthMiddleware.name);

  constructor(private readonly requestService: RequestService) {}
  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(AuthMiddleware.name);
    // Authenticate the request
    const userID = '123';
    this.requestService.setUserId(userID);

    next();
  }
}
