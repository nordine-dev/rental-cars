import pool from "../config/db.js";
export const addCar = async (req, res) => {
  const userId = req.userId;

  const {
    name,
    type,
    brand,
    model,
    year,
    transmission,
    fuel_type,
    seats,
    price_per_day,
    available,
  } = req.body;

  const file = req.file;

  if (
    !userId ||
    !name ||
    !type ||
    !brand ||
    !model ||
    !year ||
    !transmission ||
    !fuel_type ||
    !seats ||
    !price_per_day ||
    !file ||
    available === undefined ||
    available === null
  ) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  try {
    const imageFileName = file.filename;

    const result = await pool.query(
      `INSERT INTO cars 
       (name, type, brand, model, year, transmission, fuel_type, seats, price_per_day, image_file, available, user_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
       RETURNING *`,
      [
        name,
        type,
        brand,
        model,
        parseInt(year),
        transmission,
        fuel_type,
        parseInt(seats),
        parseFloat(price_per_day),
        imageFileName,
        available === "true" || available === true,
        userId,
      ]
    );

    res.json({
      success: true,
      message: "Car added successfully",
      data: result.rows[0],
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getCars = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM cars");
    res.json({
      success: true,
      message: "Cars fetched successfully",
      cars: result.rows,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getBookings = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM bookings");
    res.json({
      success: true,
      message: "Orders fetched successfully",
      bookings: result.rows,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: err.message });
  }
};
