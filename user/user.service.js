"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserService", {
    enumerable: true,
    get: function() {
        return UserService;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _typeorm1 = require("typeorm");
const _userentity = require("./entities/user.entity");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
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
_ts_decorate([
    (0, _typeorm.InjectRepository)(_userentity.User),
    _ts_metadata("design:type", typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository)
], UserService.prototype, "userRepository", void 0);
UserService = _ts_decorate([
    (0, _common.Injectable)()
], UserService);
