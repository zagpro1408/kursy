require 'rubygems'
require 'nokogiri'
require 'open-uri'
require 'csv'

title_new = ['Milk', 'Eggs']
price_new = ['1.0', '2.15']
image_url = ['http://www.petsonic.com/es/8208-large_default/original-mini-adult-cordero.jpg',
             'http://www.petsonic.com/es/8208-large_default/original-mini-adult-cordero.jpg',
             'http://www.petsonic.com/es/8208-large_default/original-mini-adult-cordero.jpg'
           ]

ready_rows = title_new.size

CSV.open('data.csv', 'wb') do |csv|
  csv << ['title', 'price', 'image']
  ready_rows.times do |i|
    csv << [title_new[i], price_new[i], image_url[i]]
  end
end

