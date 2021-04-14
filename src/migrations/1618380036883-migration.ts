import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1618380036883 implements MigrationInterface {
    name = 'migration1618380036883'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room" DROP CONSTRAINT "FK_a15532213d24f4aaea09f96d70b"`);
        await queryRunner.query(`ALTER TABLE "room" DROP CONSTRAINT "UQ_a15532213d24f4aaea09f96d70b"`);
        await queryRunner.query(`ALTER TABLE "room" DROP COLUMN "bookingId"`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_769a5e375729258fd0bbfc0a456"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "UQ_769a5e375729258fd0bbfc0a456"`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_769a5e375729258fd0bbfc0a456" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_769a5e375729258fd0bbfc0a456"`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "UQ_769a5e375729258fd0bbfc0a456" UNIQUE ("roomId")`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_769a5e375729258fd0bbfc0a456" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "room" ADD "bookingId" integer`);
        await queryRunner.query(`ALTER TABLE "room" ADD CONSTRAINT "UQ_a15532213d24f4aaea09f96d70b" UNIQUE ("bookingId")`);
        await queryRunner.query(`ALTER TABLE "room" ADD CONSTRAINT "FK_a15532213d24f4aaea09f96d70b" FOREIGN KEY ("bookingId") REFERENCES "booking"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
