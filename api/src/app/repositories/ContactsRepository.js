const db = require('../../database');

class ContactsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
      SELECT
        con.id
        , con.name AS contact_name
        , con.email
        , con.phone
        , cat.name AS category_name
      FROM contacts con
      LEFT JOIN categories cat
      ON cat.id = con.category_id
      ORDER BY con.name ${direction}
    `);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
      SELECT
      con.*
      , cat.name AS category_name
    FROM contacts con
    LEFT JOIN categories cat
    ON cat.id = con.category_id
      WHERE con.id = $1
    `, [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query(`
      SELECT * FROM contacts
      WHERE email = $1
    `, [email]);
    return row;
  }

  async create({
    name, email, phone, category_id,
  }) {
    // const [row] => retorna apenas a PRIMEIRA POSIÇÃO, já que é tratado como array
    const [row] = await db.query(`
      INSERT INTO contacts(name, email, phone, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
      `, [name, email, phone, category_id]);
    return row;
  }

  async update(id, {
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
      UPDATE contacts
      SET name = $1,
          email = $2,
          phone = $3,
          category_id = $4
      WHERE id = $5
      RETURNING *
    `, [name, email, phone, category_id, id]);

    return row;
  }

  async delete(id) {
    // Retorna array vazio
    const deleteOp = db.query(`
      DELETE
      FROM contacts
      WHERE id = $1
    `, [id]);

    return deleteOp;
  }
}

module.exports = new ContactsRepository();
