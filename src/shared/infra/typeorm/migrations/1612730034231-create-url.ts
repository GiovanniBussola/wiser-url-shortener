import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUrls1612730034231 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'urls',
          columns: [
            {
              name: 'id',
              type: 'integer',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'url',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'shorted_url',
              type: 'varchar',
              isNullable: false
            },
            {
              name: 'expires_in',
              type: 'timestamp',
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            }
          ]
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('urls');
    }

}
