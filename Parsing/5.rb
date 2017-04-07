require 'rubygems'
require 'nokogiri'
require 'open-uri'
require 'csv'
CATALOG_URL = "http://www.petsonic.com/es/perros/pienso"

page = Nokogiri::HTML(open(CATALOG_URL))

# Сбор href всех каталогов
rows = page.xpath('//*[@id="categories_block_left"]/div/ul/li/a') +
       page.xpath('//*[@id="categories_block_left"]/div/ul/li/ul/li/a')

rows_hrefs = []
rows.each { |i| rows_hrefs << i['href'] }
rows_hrefs.uniq!

# Сбор href всех товаров в каждом каталоге
items_hrefs = []

rows_hrefs.each do |href|
  puts "Trying to connect: #{href}"
  resp = Net::HTTP.get_response(URI.parse(href))

  # Проверка доступности страницы
  if resp.code.match(/20\d/)
    # В каталоге присутствует слайдер, поэтому определим сколько товаров находится во всем каталоге
    quantity = Nokogiri::HTML(resp.body).
      xpath('//*[@id="center_column"]/div[1]/div/div[2]/h1/small').
      text.split.map { |i| i.to_i }.max

    # Проверка на количество товаров к каталоге
    # Если товаров меньше или равно 20, то обычным способом открываем страницу
    # Если больше, то передаем GET-запросом необходимое количество товаров для отображения на странице
    if quantity <= 20
      items = Nokogiri::HTML(resp.body).
        xpath('//*[@id="center_column"]/div/div/div/div/div/div/a')

      items.each do |i|
        items_hrefs << i['href'] unless i['href'] == "#"
      end

    else
      # передаем GET-запросом необходимое количество товаров для отображения на странице: ?n=#{quantity}
      items = Nokogiri::HTML(open("#{href}?n=#{quantity}")).
        xpath('//*[@id="center_column"]/div/div/div/div/div/div/a')

      items.each do |i|
          items_hrefs << i['href'] unless i['href'] == "#"
      end
    end

  else
    puts "\tNot a valid page; response was: #{resp.code}"
  end
end


# Сбор данных со страницы товаров
# Определим массивы из которых будут передаваться данные в CSV-файл
# Перебор всех необходимых данных; Преобразование данных в нужных формат для CSV-файла
title_new = []
price_new = []
image_new = []

items_hrefs.each do |href|
  puts "Copy data from: #{href}"
  resp = Net::HTTP.get_response(URI.parse(href))

  # Проверка доступности страницы
  if resp.code.match(/20\d/)
    # На странице товаров может быть 2 и больше title одного товара, но изображение только одно
    # Поэтому определим переменную rows_size, которая укажет сколько раз надо записать изображение в массив
    rows_size = 0

    # Получение название товара
    title = Nokogiri::HTML(resp.body).
      xpath('//*[@id="breadcrumb"]/div/div/div').text
    title = title.split('>').last.strip!

    # Получение веса товара, допишем его к названию товара и запишем
    weight = Nokogiri::HTML(resp.body).
      xpath('//*[@id="attributes"]/fieldset/div/ul/li/span[@class="attribute_name"]/text()')
    weight.each do |w|
      title_new << title + " - #{w}"
      rows_size += 1
    end

    # Получение и запись цены товара
    price = Nokogiri::HTML(resp.body).
      xpath('//*[@id="attributes"]/fieldset/div/ul/li/span[@class="attribute_price"]/text()')
    price = price.to_s.split(/\s+/)

    price.each do |p|
      p = p.to_f
      price_new << sprintf("%.2f",p) if p > 0
    end

    # Получение и запись url изображения
    image = Nokogiri::HTML(resp.body).
      xpath('//*[@id="bigpic"]')

    image.each do |i|
      rows_size.times do
        image_new << i['src']
      end
    end

  else
    puts "\tNot a valid page; response was: #{resp.code}"
  end
end

# Запись данных в CSV-файл
# title_new.size поможет определитьсколько строчек необходимо для записиь в CSV-файл
CSV.open('data.csv', 'wb') do |csv|
  csv << ['title', 'price', 'image']
  title_new.size.times do |i|
    csv << [title_new[i], price_new[i], image_new[i]]
  end
end
