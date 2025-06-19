import pool from "../config/db.js";

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

export const bookCar = async (req, res) => {
  const { car_id, car_name, full_name, email, phone, pickup_date, dropoff_date, total_days, total_price } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO bookings (
        car_id, car_name, full_name, email, phone,
        pickup_date, dropoff_date, total_days, total_price
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
      [
        car_id,
        car_name,
        full_name,
        email,
        phone,
        pickup_date,
        dropoff_date,
        total_days,
        total_price
      ]
    );

    res.json({
      success: true,
      message: "Car booked successfully",
      booking: result.rows[0],
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: err.message });
  }
};
