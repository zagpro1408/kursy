dictionary = {
  "dog" => ["собака", "собачка"],
  "cat" => ["кошка", "кот"],
  "girl" => ["девушка"]
}

loop do
  print "Введите слово: "
  word = gets.strip

  value = dictionary[word]
  puts "#{word}:\nКоличество значение: #{dictionary[word].length}\nЗначение: #{dictionary[word].each { |value| print value}}"
end
