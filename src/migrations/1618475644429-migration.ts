import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1618475644429 implements MigrationInterface {
    name = 'migration1618475644429'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "fullname" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "fullname"`);
    }

}
