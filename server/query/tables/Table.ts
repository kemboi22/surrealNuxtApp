const artistTable = `DEFINE TABLE artist SCHEMALESS PERMISSIONS NONE;`

const averageProductReview = `DEFINE TABLE avg_product_review SCHEMALESS AS SELECT count() AS number_of_reviews, math::mean(rating) AS avg_review, product.name AS product FROM review GROUP BY product;`

const create = `DEFINE TABLE create SCHEMALESS PERMISSIONS NONE;`;

const dailySales = "DEFINE TABLE daily_sales SCHEMALESS AS SELECT count() AS number_of_orders, time::format(<datetime> order_date, '%Y-%m-%d') AS day, math::sum((price * IF discount = NONE THEN 1 END) * quantity) AS sum_sales, currency FROM order GROUP BY day, currency;"

const orderTable = "DEFINE TABLE order SCHEMAFULL PERMISSIONS NONE;";

const orderTableFields = "DEFINE FIELD currency ON order TYPE string ASSERT $value != NONE;\n" +
    "DEFINE FIELD discount ON order TYPE number ASSERT $value != NONE;\n" +
    "DEFINE FIELD id ON order TYPE string ASSERT $value != NONE;\n" +
    "DEFINE FIELD in ON order TYPE string ASSERT $value != NONE;\n" +
    "DEFINE FIELD order_date ON order TYPE datetime ASSERT $value != NONE;\n" +
    "DEFINE FIELD order_status ON order TYPE string ASSERT $value != NONE;\n" +
    "DEFINE FIELD out ON order TYPE string ASSERT $value != NONE;\n" +
    "DEFINE FIELD payment_method ON order TYPE string ASSERT $value != NONE;\n" +
    "DEFINE FIELD price ON order TYPE number ASSERT $value != NONE;\n" +
    "DEFINE FIELD product_name ON order TYPE string ASSERT $value != NONE;\n" +
    "DEFINE FIELD quantity ON order TYPE number ASSERT $value != NONE;\n" +
    "DEFINE FIELD shipping_address ON order FLEXIBLE TYPE object ASSERT $value != NONE;"

const personTable = "DEFINE TABLE person SCHEMALESS PERMISSIONS NONE;";

const productTable = "DEFINE TABLE product SCHEMALESS PERMISSIONS NONE;";

const reviewTable = "DEFINE TABLE review SCHEMALESS PERMISSIONS NONE;";
