SELECT purchases.id    AS "purchase id",
       products.title  AS "product name",
       purchases.count AS "count",
       users.email     AS "buyer email"
FROM purchases
         INNER JOIN products ON products.id = purchases.product
         INNER JOIN users ON users.id = purchases.buyer
WHERE users.star = true