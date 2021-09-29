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
exports.Accessories = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Motor_1 = require("./Motor");
let Accessories = class Accessories extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Accessories.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Accessories.prototype, "accessoryName", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Motor_1.Motor]),
    __metadata("design:type", Array)
], Accessories.prototype, "motorid", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Motor_1.Motor),
    __metadata("design:type", Array)
], Accessories.prototype, "motors", void 0);
Accessories = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Accessories);
exports.Accessories = Accessories;
//# sourceMappingURL=Accessories.js.map