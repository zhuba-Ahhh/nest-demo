"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
let UserService = class UserService {
    async create(createUserDto) {
        createUserDto.createTime = createUserDto.updateTime = new Date();
        return await this.userRepository.save(createUserDto);
    }
    async findAll() {
        return await this.userRepository.find();
    }
    async findOne(id) {
        console.log(id);
        return this.userRepository.findBy;
    }
    async update(id, updateUserDto) {
        updateUserDto.updateTime = new Date();
        return await this.userRepository.update(id, updateUserDto);
    }
    async remove(id) {
        return await this.userRepository.delete(id);
    }
};
exports.UserService = UserService;
__decorate([
    (0, typeorm_1.InjectRepository)(user_entity_1.User),
    __metadata("design:type", typeorm_2.Repository)
], UserService.prototype, "userRepository", void 0);
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map