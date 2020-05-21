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

Product.destroy_all
p1 = Product.create(price: 20, description: "Skirt", details: "Good for everything")
file1 = open('https://active-storage-northwest-seeds.s3-us-west-2.amazonaws.com/skirt.jpeg')
p1.photo.attach(io: file1, filename: 'skirt.jpeg')

p2 = Product.create(price: 10, description: "Shoes", details: "Happy hiking")
file2 = open('https://active-storage-northwest-seeds.s3-us-west-2.amazonaws.com/shoes.jpeg')
p2.photo.attach(io: file2, filename: 'shoes.jpeg')

p3 = Product.create(price: 15, description: "Pants", details: "Party in your pants")
file3 = open('https://active-storage-northwest-seeds.s3-us-west-2.amazonaws.com/pants.jpeg')
p3.photo.attach(io: file3, filename: 'pants.jpeg')


Size.destroy_all
s1 = Size.create(size: "S")
s2 = Size.create(size: "M")
s3 = Size.create(size: "L")


Color.destroy_all
c1 = Color.create(color: "blue")
c2 = Color.create(color: "red")
c3 = Color.create(color: "black")

Tag.destroy_all
t1 = Tag.create(tag: "awesome")
t2 = Tag.create(tag: "rad")
t3 = Tag.create(tag: "fit")

Review.destroy_all
r1 = Review.create(author_id: u1.id, body: "I like it! Looks good on my butt", product_id: p1.id, star: 5)
r2 = Review.create(author_id: u2.id, body: "Nice shoes yo!", product_id: p2.id, star: 5)
r3 = Review.create(author_id: u1.id, body: "Party pants!", product_id: p3.id, star: 4)

Sku.destroy_all
sk1 = Sku.create(product_id: p1.id, color_id: c1.id, size_id: s1.id, count: 20)
sk2 = Sku.create(product_id: p1.id, color_id: c2.id, size_id: s1.id, count: 15)
sk3 = Sku.create(product_id: p1.id, color_id: c3.id, size_id: s1.id, count: 10)

sk4 = Sku.create(product_id: p1.id, color_id: c1.id, size_id: s2.id, count: 20)
sk5 = Sku.create(product_id: p1.id, color_id: c1.id, size_id: s3.id, count: 15)
sk6 = Sku.create(product_id: p2.id, color_id: c1.id, size_id: s1.id, count: 10)

sk7 = Sku.create(product_id: p3.id, color_id: c1.id, size_id: s1.id, count: 20)
sk8 = Sku.create(product_id: p3.id, color_id: c1.id, size_id: s2.id, count: 15)
sk9 = Sku.create(product_id: p3.id, color_id: c1.id, size_id: s3.id, count: 10)

sk10 = Sku.create(product_id: p3.id, color_id: c2.id, size_id: s1.id, count: 20)
sk11 = Sku.create(product_id: p3.id, color_id: c2.id, size_id: s2.id, count: 15)
sk12 = Sku.create(product_id: p3.id, color_id: c2.id, size_id: s3.id, count: 10)

sk13 = Sku.create(product_id: p3.id, color_id: c3.id, size_id: s1.id, count: 20)
sk14 = Sku.create(product_id: p3.id, color_id: c3.id, size_id: s2.id, count: 15)
sk15 = Sku.create(product_id: p3.id, color_id: c3.id, size_id: s3.id, count: 10)