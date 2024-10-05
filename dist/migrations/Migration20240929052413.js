"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20240929052413 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20240929052413 extends migrations_1.Migration {
    async up() {
        this.addSql(`create table "post" ("_id" serial primary key, "created_at" date not null, "updated_at" date not null, "title" text not null);`);
    }
    async down() {
        this.addSql(`drop table if exists "post" cascade;`);
    }
}
exports.Migration20240929052413 = Migration20240929052413;
//# sourceMappingURL=Migration20240929052413.js.map