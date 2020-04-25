json.extract! size, :id, :product_id, :size

json.colors size.colors.map(&:id)