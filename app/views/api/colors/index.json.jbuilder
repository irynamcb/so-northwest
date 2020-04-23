@colors.each do |color|
  json.set! color.id do
    json.partial! 'api/colors/color', color: color
  end
end