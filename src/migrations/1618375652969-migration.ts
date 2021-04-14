import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1618375652969 implements MigrationInterface {
    name = 'migration1618375652969'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "dateStart"`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "dateStart" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "dateEnd"`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "dateEnd" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "dateEnd"`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "dateEnd" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "dateStart"`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "dateStart" TIMESTAMP NOT NULL`);
    }

}
