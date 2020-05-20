import { Controller, Post, Body, Query } from "@nestjs/common";
import { UserService } from "./user.service";


@Controller('auth')
export class UserController {
  constructor(private readonly authService: UserService) {

  }
}