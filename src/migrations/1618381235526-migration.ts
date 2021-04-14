import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1618381235526 implements MigrationInterface {
    name = 'migration1618381235526'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_336b3f4a235460dc93645fbf222"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_769a5e375729258fd0bbfc0a456"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "roomId"`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "email" integer`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "name" integer`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_508af7fd5b7b5b733d799c83a72" FOREIGN KEY ("email") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_f71c56b6af61228a6f1c5b7e32c" FOREIGN KEY ("name") REFERENCES "room"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_f71c56b6af61228a6f1c5b7e32c"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_508af7fd5b7b5b733d799c83a72"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "roomId" integer`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_769a5e375729258fd0bbfc0a456" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_336b3f4a235460dc93645fbf222" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
