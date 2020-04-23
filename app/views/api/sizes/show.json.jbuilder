json.sizes do
  json.set! @size.id do
    json.partial! 'api/sizes/size', size: @size
  end
end