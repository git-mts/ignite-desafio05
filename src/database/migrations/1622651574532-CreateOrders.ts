import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrders1622651574532 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table(
        {
          name: 'orders',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true
            },
            {
              name: 'customer',
              type: 'uuid',
            },
            {
              name: 'status',
              type: 'varchar',
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
            }
          ]
        }
      )
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('genres');
  }

}
