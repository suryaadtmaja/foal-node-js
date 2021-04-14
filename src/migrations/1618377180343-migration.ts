import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1618377180343 implements MigrationInterface {
    name = 'migration1618377180343'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room" ADD "bookingId" integer`);
        await queryRunner.query(`ALTER TABLE "room" ADD CONSTRAINT "UQ_a15532213d24f4aaea09f96d70b" UNIQUE ("bookingId")`);
        await queryRunner.query(`ALTER TABLE "room" ADD CONSTRAINT "FK_a15532213d24f4aaea09f96d70b" FOREIGN KEY ("bookingId") REFERENCES "booking"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room" DROP CONSTRAINT "FK_a15532213d24f4aaea09f96d70b"`);
        await queryRunner.query(`ALTER TABLE "room" DROP CONSTRAINT "UQ_a15532213d24f4aaea09f96d70b"`);
        await queryRunner.query(`ALTER TABLE "room" DROP COLUMN "bookingId"`);
    }

}
