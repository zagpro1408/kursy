require 'rubygems'
require 'nokogiri'
require 'open-uri'
CATALOG_URL = "http://www.petsonic.com/es/perros/pienso/original-mini-adult-pollo"

title = Nokogiri::HTML(open(CATALOG_URL)).xpath('//*[@id="breadcrumb"]/div/div/div').text
title = title.split('>').last.strip!
title_new = []

weight = Nokogiri::HTML(open(CATALOG_URL)).xpath('//*[@id="attributes"]/fieldset/div/ul/li/span[@class="attribute_name"]/text()')
weight.each do |w|
  title_new << title + " - #{w}"
end

price = Nokogiri::HTML(open(CATALOG_URL)).xpath('//*[@id="attributes"]/fieldset/div/ul/li/span[@class="attribute_price"]/text()')
price = price.to_s.split(/\s+/)
price_new = []
price.each do |p|
  p = p.to_f
  price_new << p if p > 0
end

rows_size = title_new.size
image = Nokogiri::HTML(open(CATALOG_URL)).xpath('//*[@id="bigpic"]')
image_new = []
image.each do |i|
  rows_size.times do
    image_new << i['src']
  end
end

# Отобразим
puts title_new.inspect
puts price_new.inspect
puts image_new.inspect

puts title_new.size
puts price_new.size
puts image_new.size
