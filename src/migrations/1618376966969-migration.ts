import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1618376966969 implements MigrationInterface {
    name = 'migration1618376966969'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_769a5e375729258fd0bbfc0a456"`);
        await queryRunner.query(`CREATE TABLE "room_booking_booking" ("roomId" integer NOT NULL, "bookingId" integer NOT NULL, CONSTRAINT "PK_accc4f23df9e739a565c73c768b" PRIMARY KEY ("roomId", "bookingId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5b5611799aae9591c824a67686" ON "room_booking_booking" ("roomId") `);
        await queryRunner.query(`CREATE INDEX "IDX_9b0b8ecd3294ed3b6a6c1476f7" ON "room_booking_booking" ("bookingId") `);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "UQ_769a5e375729258fd0bbfc0a456"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "roomId"`);
        await queryRunner.query(`ALTER TABLE "room_booking_booking" ADD CONSTRAINT "FK_5b5611799aae9591c824a676866" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "room_booking_booking" ADD CONSTRAINT "FK_9b0b8ecd3294ed3b6a6c1476f79" FOREIGN KEY ("bookingId") REFERENCES "booking"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room_booking_booking" DROP CONSTRAINT "FK_9b0b8ecd3294ed3b6a6c1476f79"`);
        await queryRunner.query(`ALTER TABLE "room_booking_booking" DROP CONSTRAINT "FK_5b5611799aae9591c824a676866"`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "roomId" integer`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "UQ_769a5e375729258fd0bbfc0a456" UNIQUE ("roomId")`);
        await queryRunner.query(`DROP INDEX "IDX_9b0b8ecd3294ed3b6a6c1476f7"`);
        await queryRunner.query(`DROP INDEX "IDX_5b5611799aae9591c824a67686"`);
        await queryRunner.query(`DROP TABLE "room_booking_booking"`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_769a5e375729258fd0bbfc0a456" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
