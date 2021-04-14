import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1618373046523 implements MigrationInterface {
    name = 'migration1618373046523'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room" ADD "roomNumber" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room" DROP COLUMN "roomNumber"`);
    }

}
