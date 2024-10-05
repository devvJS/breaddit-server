import { Migration } from '@mikro-orm/migrations';

export class Migration20240929052413 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "post" ("_id" serial primary key, "created_at" date not null, "updated_at" date not null, "title" text not null);`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "post" cascade;`);
  }

}
