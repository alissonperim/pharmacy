import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1714262021724 implements MigrationInterface {
    name = 'Migration1714262021724'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2024-04-27T23:53:42.929Z"', "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "created_by" character varying(255) NOT NULL, "updated_by" character varying(255) NOT NULL, "deleted_by" character varying(255) NOT NULL, "street" character varying(120) NOT NULL, "number" character varying(120) NOT NULL, "neighborhood" character varying(80) NOT NULL, "city" character varying(60) NOT NULL, "state" character varying(60) NOT NULL, "country" character varying(60) NOT NULL, "zipCode" character varying(9) NOT NULL, "complement" character varying(120) NOT NULL, "reference" character varying(120) NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."users_roles_enum" AS ENUM('ADMIN', 'MANAGER', 'EMPLOYEE', 'CASHIER')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2024-04-27T23:53:42.929Z"', "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "created_by" character varying(255) NOT NULL, "updated_by" character varying(255) NOT NULL, "deleted_by" character varying(255) NOT NULL, "name" character varying(120) NOT NULL, "last_name" character varying(120) NOT NULL, "phone_number" character varying(14) NOT NULL, "email" character varying(120) NOT NULL, "birth_date" date NOT NULL, "roles" "public"."users_roles_enum" array NOT NULL DEFAULT '{EMPLOYEE}', "addressId" uuid, CONSTRAINT "REL_bafb08f60d7857f4670c172a6e" UNIQUE ("addressId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_roles_enum"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
