json.colors do
  json.set! @color.id do
    json.partial! 'api/colors/color', color: @color
  end
end