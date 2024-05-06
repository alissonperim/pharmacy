import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1714953841813 implements MigrationInterface {
    name = 'Migration1714953841813'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "created_at" SET DEFAULT '"2024-05-06T00:04:07.589Z"'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '"2024-05-06T00:04:07.589Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2024-04-27 23:53:42.929'`);
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "created_at" SET DEFAULT '2024-04-27 23:53:42.929'`);
    }

}
