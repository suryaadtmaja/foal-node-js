import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1618377091505 implements MigrationInterface {
    name = 'migration1618377091505'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" ADD "roomId" integer`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "UQ_769a5e375729258fd0bbfc0a456" UNIQUE ("roomId")`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_769a5e375729258fd0bbfc0a456" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_769a5e375729258fd0bbfc0a456"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "UQ_769a5e375729258fd0bbfc0a456"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "roomId"`);
    }

}
