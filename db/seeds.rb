# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# ApplicationRecord.reset_column_information

require 'open-uri'

User.destroy_all
u1 = User.create(first_name: "Iryna", last_name: "McBride", email: "iryna@gmail.com", city: "Seattle", password: '1234567')
u2 = User.create(first_name: "Brian", last_name: "Collins", email: "brian@gmail.com", city: "Seattle", password: '1234567')
u3 = User.create(first_name: "Oksana", last_name: "Gutsu", email: "oksana@gmail.com", city: "Seattle", password: '1234567')

Product.destroy_all
p1 = Product.create(price: 7.99, description: "Frozen Chicken Crepe", details: "chicken breast, mushrooms, cheese, Bechamel sauce")
# file1 = open('https://active-storage-northwest-seeds.s3-us-west-2.amazonaws.com/skirt.jpeg')
# p1.photo.attach(io: file1, filename: 'skirt.jpeg')

p2 = Product.create(price: 7.99, description: "Frozen Veggie Crepe", details: "potato, mushrooms, onion, cheese, Bechamel sauce")
# file2 = open('https://active-storage-northwest-seeds.s3-us-west-2.amazonaws.com/shoes.jpeg')
# p2.photo.attach(io: file2, filename: 'shoes.jpeg')

p3 = Product.create(price: 7.99, description: "Frozen Ham and Cheese Crepe", details: "black forest ham, cheese, Bechamel sauce")
# file3 = open('https://active-storage-northwest-seeds.s3-us-west-2.amazonaws.com/pants.jpeg')
# p3.photo.attach(io: file3, filename: 'pants.jpeg')


Tag.destroy_all
t1 = Tag.create(tag: "savory")
t2 = Tag.create(tag: "beverages")
t3 = Tag.create(tag: "desserts")

Review.destroy_all
r1 = Review.create(author_id: u1.id, body: "I like it!", product_id: p1.id, star: 5)
r2 = Review.create(author_id: u2.id, body: "Nice!", product_id: p2.id, star: 5)
r3 = Review.create(author_id: u1.id, body: "Yum!", product_id: p3.id, star: 4)

Sku.destroy_all
sk1 = Sku.create(product_id: p1.id, count: 100)
sk2 = Sku.create(product_id: p2.id, count: 100)
sk3 = Sku.create(product_id: p3.id, count: 100)
