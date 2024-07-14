import mysql from "mysql2";

export const dbConnection = async () => {
  try {
    await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "harshana1945",
      database: "talentfort_task_tracking",
    });

    console.log("DB connection established");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};
