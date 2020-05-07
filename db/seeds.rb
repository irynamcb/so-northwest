# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# ApplicationRecord.reset_column_information

User.destroy_all
u1 = User.create(first_name: "Iryna", last_name: "McBride", email: "iryna@gmail.com", city: "Seattle", password: '1234567')
u2 = User.create(first_name: "Brian", last_name: "Collins", email: "brian@gmail.com", city: "Seattle", password: '1234567')

Product.destroy_all
p1 = Product.create(price: 20, description: "Skirt", details: "Good for everything")
p2 = Product.create(price: 10, description: "Shoes", details: "Happy hiking")
p3 = Product.create(price: 15, description: "Pants", details: "Party in your pants")


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
