SELECT email
FROM users
         INNER JOIN purchases ON (purchases.buyer = users.id)
WHERE purchases.product = (SELECT id FROM products WHERE title = 'iPhone 14' LIMIT 1)
