require 'rubygems'
require 'net/http'
require 'open-uri'
require 'nokogiri'


  url = "http://www.petsonic.com/es/perros/pienso/trainer-personal-pienso-perro/perro"
  puts "\nGetting #{url}"

  resp = Net::HTTP.get_response(URI.parse(url))
  puts resp
  if resp.code.match(/20\d/)
    puts "Success:"
    puts Nokogiri::HTML(resp.body).css('title').text
  else
    puts "\tNot a valid page; response was: #{resp.code}"
  end

  puts "1"
