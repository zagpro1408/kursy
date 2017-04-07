require 'rubygems'
require 'nokogiri'
require 'open-uri'
PAGE_URL = "https://en.wikipedia.org/wiki/HTML"

page = Nokogiri::HTML(open(PAGE_URL))

page.css('div#p-lang.portal ul a').each do |el|
  puts el['lang']
end
