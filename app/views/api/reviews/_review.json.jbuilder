json.extract! review, :id, :author_id, :body, :product_id, :star, :created_at

json.author review.author.first_name